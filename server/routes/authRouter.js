const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

const authRouter = express.Router();

dotenv.config();

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const spotifyCallbackUrl = 'http://localhost:8080/';

authRouter.get('/', (req, res) => res.send('Auth Test'));
authRouter.get('/login', (req, res) => {
  console.log('Auth Logging In...');
  const authUrl = 'https://accounts.spotify.com/authorize';
  const params = {
    client_id: spotifyClientId,
    response_type: 'code',
    redirect_uri: spotifyCallbackUrl,
    scope: 'user-read-email user-read-private streaming playlist-read-private playlist-read-collaborative',
  };
  const urlSearchParams = new URLSearchParams(params);
  res.redirect(`${authUrl}?${urlSearchParams.toString()}`);
});

authRouter.get('/callback', async (req, res, next) => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const authString = `${spotifyClientId}:${spotifyClientSecret}`;
  const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`;
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: spotifyCallbackUrl,
  });

  try {
    // initial post request to get access token
    const { data } = await axios.post(tokenUrl, body.toString(), {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    // stick it in an express session
    req.session.token = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      tokenTimeStamp: Date.now(),
    };
    console.log(req.session.token);

    // example fetching data from spotify using axios
    const userUrl = 'https://api.spotify.com/v1/me';
    // using axios to make get request for user data.
    // this time we use bearer token which make use of the oauth token
    const user = await axios.get(userUrl, {
      headers: {
        Authorization: `Bearer ${req.session.token.accessToken}`,
      },
    });

    const userData = user.data;

    req.session.user = userData;
    return res.redirect('http://localhost:8080');
  } catch (error) {
    console.log(error);
    return res.status(400).redirect('/auth/login');
  }
});

// important for backend to grab token which i stored in sessions
authRouter.get('/token', async (req, res) => {
  console.log('Requesting token...');
  console.log(req.session);
  if (!req.session.token) return res.redirect('/auth/login');
  const { refreshToken, tokenTimeStamp } = req.session.token;
  const currentTime = Date.now();

  // if token is expired
  if (currentTime - tokenTimeStamp > 3600000) {
    // refresh token
    const authData = {
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        headers: {
          Authorization: `Basic ${Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64')}`,
        },
      },
    };

    try {
      console.log('Refreshing token...');
      const { data } = await axios.post('https://accounts.spotify.com/api/token', authData);
      const accessToken = data.access_token;
      res.session.token.accessToken = accessToken;
      res.session.token.refreshToken = refreshToken;
      res.session.token.tokenTimeStamp = Date.now();
      return res.status(200).json({
        accessToken,
      });
    } catch (error) {
      console.error('Failed to refresh token... ', error);
      return res.status(400).send('Error refreshing access token');
    }
  }

  return res.json({ accessToken: req.session.token.accessToken });
});

module.exports = authRouter;

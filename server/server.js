const express = require('express');
const session = require('express-session');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// creating a session instance
app.use(session({
  // secret is in .env file
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: true,
  },
}));

// Todo: get request for weather type

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const spotifyCallbackUrl = 'http://localhost:3000/auth/callback';

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http//localhost:8080');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.get('/', (req, res) => res.send('Hello World'));

app.get('/auth/login', (req, res) => {
  const authUrl = 'https://accounts.spotify.com/authorize';
  const params = {
    client_id: spotifyClientId,
    response_type: 'code',
    redirect_uri: spotifyCallbackUrl,
    scope: 'user-read-email user-read-private streaming user-read-recently-played',
  };
  const urlSearchParams = new URLSearchParams(params);
  res.redirect(`${authUrl}?${urlSearchParams.toString()}`);
});

app.get('/auth/callback', async (req, res) => {
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

    // example fetching data from spotify using axios
    const userUrl = 'https://api.spotify.com/v1/me';
    // using axios to make get request for user data.
    // this time we use bearer token which make use of the oauth token
    const userResponse = await axios.get(userUrl, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });

    const userData = userResponse.data;
    console.log(userData);

    res.redirect('http://localhost:8080');
  } catch (error) {
    // sends back to login if request failed
    console.error(error);
    res.redirect('/auth/login');
  }
});

// route to refresh token
// app.get('/auth/refreshToken', async (req, res) => {
//   const refreshToken = req.query.refresh_token;

// });

// important for backend to grab token which i stored in sessions
app.get('/auth/token', async (req, res) => {
  const { refreshToken, tokenTimeStamp } = req.session;
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
      const { data } = await axios.post('https://accounts.spotify.com/api/token', authData);
      const accessToken = data.access_token;
      res.session.accessToken = accessToken;
      res.session.refreshToken = refreshToken;
      res.session.tokenTimeStamp = Date.now();
      return res.json({
        access_token: accessToken,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).send('Error refreshing access token');
    }
  }

  return res.json({ accessToken: req.session.accessToken });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

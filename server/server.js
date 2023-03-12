const express = require('express');
const request = require('request');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Todo: get request for weather type
dotenv.config();

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/auth/login', (req, res) => {
  // res.sendStatus(201);
  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const scope = 'streaming user-read-email user-read-private';
  const state = generateRandomString(16);
  const authQueryParameters = new URLSearchParams({
    response_type: 'code',
    client_id: spotifyClientId,
    scope,
    redirect_uri: 'http://localhost:3000/auth/callback',
    state,
  });
  res.redirect(`https://accounts.spotify.com/authorize/?${authQueryParameters.toString()}`);
});

app.get('/auth/callback', (req, res) => {
  const { code } = req.query;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri: 'http://localhost:8080',
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization: `Basic ${Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const { access_token } = body;
      res.redirect('/');
    }
  });
});

app.get('/auth/token', (req, res) => {
  res.json(
    {
      access_token,
    },
  );
});

app.use((err, req, res) => {
  const template = {
    message: { err: 'something went wrong in the middlware' },
    log: 'console.log message',
    status: 400,
  };

  const error = { ...template, ...err };

  console.error(error.log);
  res.status(error.status).json(error.message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

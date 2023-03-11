const express = require('express');
// const dotenv = require('dotenv');

const app = express();

// Todo: get request for weather type
// dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/auth/login', (req, res) => {
  // res.sendStatus(201);
  const generateRandomString = function (length) {
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
    client_id: spotify_client_id,
    scope,
    redirect_uri: 'http://localhost:3000/auth/callback',
    state,
  });
    res.redirect('https://accounts.spotify.com/authorize/?' + authQueryParameters.toString());
});

app.get('/auth/callback', (req, res) => {

  // const code = req.query.code;
  // const authOptions = {
  //   url: 'https://accounts.spotify.com/api/token',
  //   form: {
  //   code,
  //   redirect_uri: "http://localhost:3000/auth/callback",
  //   grant_type: 'authorization_code'
  // },
  //   headers: {
  //     'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
  //     'Content-Type': 'application/x-www-form-urlencoded'
  // },
  //     json: true;
  //   };
  
  //   request.post(authOptions, function(error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //       const access_token = body.access_token;
  //       res.redirect('/');
  //     }
  //   });
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

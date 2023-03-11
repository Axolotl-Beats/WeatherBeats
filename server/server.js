const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Todo: get request for weather type
dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.get('/auth/login', (req, res) => res.status(200).send('login endpoint'));

app.get('/auth/callback', (req, res) => res.status(200).send('callback endpoint'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

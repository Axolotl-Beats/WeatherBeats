const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRouter');
const weatherRouter = require('./routes/weather');
const userController = require('../database/controller')

dotenv.config();

const app = express();
const path = require('path');

const PORT = 3000;

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
    // secure true will only persist the cookie in https
    secure: false,
  },
}));

// Todo: get request for weather type
dotenv.config();

const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

app.use('/auth', authRoutes);
app.use('/weather', weatherRouter);

app.get('/api/user', async (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'User not logged in' });
  }
  const { display_name, email, href } = req.session.user;
  const data = {
    display_name,
    email,
    href,
  };
  return res.status(200).json(data);
});

app.post('/db/addUser', userController.addUser, (req, res)=> {
  res.status(200).json(res.locals.data);
});

app.get('/db/getUser', userController.getUser, (req,res)=> {
  res.status(200).json(res.locals.email)
})

// added catch
app.use('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

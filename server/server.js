const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRouter');

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
    // secure true will only persist the cookie in https
    secure: false,
  },
}));

// Todo: get request for weather type

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http//localhost:8080');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.get('/', (req, res) => res.send('Hello World'));

app.use('/auth', authRoutes);

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

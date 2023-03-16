const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/authRouter');
const weatherRouter = require('./routes/weatherRouter');
const userRouter = require('./routes/userRouter');
const userController = require('./controller/userController')

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//dummy endpoint to verify user
app.use('/api/verifyuser', userController.verifyUser, (req, res)=>{
  res.status(200).json(res.locals.verified);
});

//dummy endpoint for usersignup
app.use('/api/signup', userController.createUser, (req, res)=>{
  res.status(200).json(res.locals.createUserVerified);
});

//dummy endpoint to get userdetails
app.use('/api/getuserdetails', userController.getUser, (req, res)=>{
  res.status(200).json(res.locals.userData);
});


// creating a session instance
// app.use(session({
//   // secret is in .env file
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     // secure true will only persist the cookie in https
//     secure: false,
//   },
// }));

app.use('/api/verifytest', userRouter);




// Todo: get request for weather type
app.use('/auth', authRoutes);
app.use('/weather', weatherRouter);

app.get('/api/user', async (req, res) => {
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

// added catch
app.use('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

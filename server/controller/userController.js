db = require('../models/WBModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.query;

  const insertNewUser = `INSERT INTO users(username, password) VALUES ${username} ${password}`;
  db.query(insertNewUser);
  console.log('ran db.query');
  return next();
};

userController.verifyUser = (req, res, next) => {
//   const { username, password } = req.query;
  const username = 'spencer';
  const verifyQuery = `select username From users where username=${username}`;
  db.query(verifyQuery)
    .then(() => next())
    .catch((err) => {
      if (err) next({ message: 'User does not exist' });
    });
};

module.exports = userController;

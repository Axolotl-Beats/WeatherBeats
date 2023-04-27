const dbQueries = require('../models/WBModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.verifyUser = async (req, res, next) => {
  try {
    const result = await dbQueries.getOneUser(req.query.username);
    console.log(result.rows[0]['password'])
    const comparison = await bcrypt.compare(
      req.query.password,
      result.rows[0]['password']
    );
    console.log('comparison', comparison)
    res.locals.verified = comparison;
    return next();
  } catch (error) {
    return next('verify user error');
  }
};

userController.createUser = async (req, res, next) => {
  try {
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //console.log(hashedPassword)
    const createdUser = await dbQueries.createOneUser(
      req.body.username,
      hashedPassword,
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      req.body.profileImage,
    );
    console.log('createdUser', createdUser.rowCount)
    //const results = await dbQueries.getAllUsers();
    if (createdUser.rowCount===1) {
      res.locals.createUserVerified = true;
    }
    return next();
  } catch (error) {
    return next('create user error');
  }
};

userController.getUser = async (req, res, next) => {
  try {
    const result = await dbQueries.getOneUser(req.query.username);
    res.locals.userData = result.rows[0]
    return next();
  } catch (error) {
    return next('verify user error');
  }
};

module.exports = userController;

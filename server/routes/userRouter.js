const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.post('/', (req, res) => {
  res.status(200).json(true);
});

module.exports = userRouter;

const { json } = require('express')
const db = require('./model')

const userController = {};

userController.addUser = (req, res, next) => {
    console.log("in addUser middleware")
  
    const {username, email} = req.body;
    const params = [username, email];
    const queryText = `INSERT INTO users (username, email) 
    VALUES ($1, $2)`;
    db.query(queryText,params, (err,data) => {
    if (err) {
      console.log('query error')
      throw err;
    }
    //console.log(data.rows)
    res.locals.data = data.rows;
    return next();
  })
}

userController.getUser = (req, res, next) => {
    const {username} = req.body;
    const params = [username]
    const queryText = `Select email FROM users where username = $1;`
    db.query(queryText, params, (err,data) => {
        if (err) {
        console.log('query error')
            throw err;
          }
        res.locals.email = data.rows;
        return next();
    })
}

module.exports = userController;
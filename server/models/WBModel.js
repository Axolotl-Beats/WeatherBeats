const { Pool } = require('pg');
const dotenv = require('dotenv')

dotenv.config()

//const PG_URI = process.env.PG_URI
const PG_URI = 'postgres://jlpfgtbf:dDt6Rypn_mf8c3PTu5R7Whm_wOpJoIGY@ruby.db.elephantsql.com/jlpfgtbf'

const pool = new Pool({
  connectionString: PG_URI
})


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query:', text);
    return pool.query(text, params, callback);
  },

  getOneUser: (username) => {
    const sqlQuery = `SELECT * FROM users u where u.username='${username}' LIMIT 1`
    return pool.query(sqlQuery)
  },

  createOneUser: (username, hashedPassword, email, firstname, lastname, profileimage) => {
    const sqlQuery = `INSERT INTO users (username, password, email, firstname, lastname, profileimage)
    VALUES ('${username}', '${hashedPassword}', '${email}', '${firstname}','${lastname}','${profileimage}');`
    console.log(sqlQuery)
    return pool.query(sqlQuery)
  },
}

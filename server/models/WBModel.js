const { Pool } = require('pg');

const PG_URI = 'postgres://uhcjaauq:OWyyH4hUaT62YLT5Ja3YA5bFLZK1QtXa@isilo.db.elephantsql.com/uhcjaauq';

const pool = new Pool({
  connectionString: PG_URI,
});

// const client = new Client({
//   user: 'uhcjaauq',
//   host: 'postgres://uhcjaauq:OWyyH4hUaT62YLT5Ja3YA5bFLZK1QtXa@isilo.db.elephantsql.com/uhcjaauq',
//   database: 'uhcjaauq',
//   password: 'OWyyH4hUaT62YLT5Ja3YA5bFLZK1QtXa',
//   port: 5432,
// });

pool.query("select username from users where username='sper'")
  .then((data) => console.log(data.rows[0].username))
  .catch((err) => console.log('user does not exist'));

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

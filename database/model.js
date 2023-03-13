const { Pool } = require('pg');
const PG_URI = 'postgres://nqervxyh:D_LcoTQG4N7IEAmwLX5X9OhdpIF1bm0I@salt.db.elephantsql.com/nqervxyh'

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text,params,callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
};


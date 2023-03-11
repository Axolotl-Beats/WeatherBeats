const express = require('express');

const app = express();
const path = require('path');

const weatherRouter = require('./routes/weather')

app.use(express.json());

app.use('/weather', weatherRouter);



app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});


module.exports = app;

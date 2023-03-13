const express = require('express');
const request = require('request');

const app = express();
const path = require('path');
const PORT = 3000;

const weatherRouter = require('./routes/weather')

app.use(express.json());


app.use('/weather', weatherRouter);

app.use('*', (req, res) => res.sendStatus(404));


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

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);

});


module.exports = app;

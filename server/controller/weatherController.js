const path = require('path');
const weatherController = {};
const API_KEY = 'dead5c9b084e896a899ac3479c1d786c';

weatherController.getData = async (req, res, next) => {
  console.log('Inside get weather middleware');
  console.log('this is the req.body', req.body.body);
  let realBody = JSON.parse(req.body.body);
  console.log(realBody);
  let zip = realBody.zip;
  // zip = Number(zip);
  console.log('the zip outside the body', typeof zip);
  const WEATHER_URL_ZIP = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;
  const weatherReq = await fetch(WEATHER_URL_ZIP);
  const apiResponse = await weatherReq.json();
  console.log(apiResponse);
  const responseObj = {
    type: apiResponse.weather[0].main.toLowerCase(),
    temp: apiResponse.main.temp,
    zip,
    city: apiResponse.name,
    iconUrl: `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`,
    bg: '',
  };
  //   console.log(apiResponse)
  if (responseObj.type === 'sunny') {
    responseObj.bg = path.resolve(__dirname, '../client/asset/')
  };
  if (responseObj.type === 'rain') {
    responseObj.bg = path.resolve(__dirname, '../client/asset')
  };
  if (responseObj.type === 'windy') {
    responseObj.bg = path.resolve(__dirname, '../client/asset')
  };
  res.locals.response = responseObj;
  console.log("This is res.locals: ", res.locals.response)
  return next();
};

module.exports = weatherController;

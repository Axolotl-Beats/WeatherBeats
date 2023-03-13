const path = require('path');
const weatherController = {};

const API_KEY = 'dead5c9b084e896a899ac3479c1d786c';

weatherController.getData = async (req,res,next) => {
  console.log('Inside get weather middleware')
  let { zip, metric } = req.body;
  if (!metric) {
    metric = 'imperial';
  }
  const WEATHER_URL_ZIP = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=${metric}`;
  const weatherReq = await fetch(WEATHER_URL_ZIP);
  const apiResponse = await weatherReq.json();
  //console.log('apiResponsee', apiResponse)
  const responseObj = {
    type: apiResponse.weather[0].main.toLowerCase(),
    temp: apiResponse.main.temp,
    metric,
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
    responseObj.bg = path.resolve(__dirname,'../client/asset')
  };
  res.locals.response = responseObj;
  return next();
};

module.exports = weatherController;

const path = require('path');
const weatherController = {};

const API_KEY = 'dead5c9b084e896a899ac3479c1d786c';

const sunImage = 'https://images.unsplash.com/photo-1600123337732-12c426c4fdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
const snowImage = 'https://images.unsplash.com/photo-1529940562329-adaa2d74325a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
const cloudImage = 'https://images.unsplash.com/photo-1562540805-17721dda51f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2976&q=80'

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
  if (responseObj.type === 'clear') {
    responseObj.bg = path.resolve(__dirname, '../client/assets/clear.jpg')
  };
  if (responseObj.type === 'rain') {
    responseObj.bg = path.resolve(__dirname, '../client/assets/rain.jpg')
  };
  if (responseObj.type === 'snow') {
    responseObj.bg = path.resolve(__dirname,'../client/assets/snow.jpg')
  };
  if (responseObj.type === 'clouds') {
    responseObj.bg = path.resolve(__dirname,'../client/assets/cloud.jpg')
  };
  if (responseObj.bg === '') {
    responseObj.bg = path.resolve(__dirname, '../client/assets/clear.jpg')
  }
  res.locals.response = responseObj;
  return next();
};

module.exports = weatherController;

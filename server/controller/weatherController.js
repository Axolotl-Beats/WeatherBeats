const { error } = require('console');
const path = require('path');
const weatherController = {};
const API_KEY = 'dead5c9b084e896a899ac3479c1d786c';

weatherController.getData = async (req, res, next) => {
  //console.log('Inside get weather middleware');
  //console.log('this is the req.body', req.body.body);
  let realBody = JSON.parse(req.body.body);
  //console.log(realBody);
  let zip = realBody.zip;
  if (zip.length != 5 || typeof zip != 'string') {
    return next(error);
  }
  // zip = Number(zip);
  //console.log('the zip outside the body', typeof zip);
  const WEATHER_URL_ZIP = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;
  const weatherReq = await fetch(WEATHER_URL_ZIP);
  const apiResponse = await weatherReq.json();
  //console.log(apiResponse);
  const responseObj = {
    type: apiResponse.weather[0].main.toLowerCase(),
    temp: apiResponse.main.temp,
    zip,
    city: apiResponse.name,
    iconUrl: `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`,
    bg: '',
    playlist: 'https://open.spotify.com/embed/playlist/37i9dQZF1EIhA3apoIYlV8',
  };
  if (responseObj.type === 'thunderstorm') {
    responseObj.bg = 'https://nypost.com/wp-content/uploads/sites/2/2019/05/de-blasio-storm-warning-new-york.jpg?quality=75&strip=all&w=744';
    response.playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1EIeOmlQSSmx93';
  }
  if (responseObj.type === 'drizzle') {
    responseObj.bg = 'https://images.ctfassets.net/4ivszygz9914/5d6ff03c-f52a-4139-99ba-27c341ae42ce/d45b70e4bee347e4e2350ca65f915d1b/d97a3c44-dd44-4f3e-98f8-19cff669e2ad.jpeg?fm=webp';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/4aW4CEXbrsqXUIEy5f8kkB';
  }
  if (responseObj.type === 'rain') {
    responseObj.bg = 'https://s7d2.scene7.com/is/image/TWCNews/nyc_rain_night_jdavitt';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1EIgb4cSH0nxB3';
  }
  if (responseObj.type === 'snow') {
    responseObj.bg = 'https://static01.nyt.com/images/2019/11/26/us/26holiday-weather01sub/26holiday-weather01sub-mobileMasterAt3x.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1EIdElFrN95hoG';
  }
  if (responseObj.type === 'mist') {
    responseObj.bg = 'https://cloudfront-us-east-1.images.arcpublishing.com/gray/JFDZ7U577FFBTCTSLUKDQDSAYQ.png';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/3MpipEMiLninINFu5gBAGE';
  }
  if (responseObj.type === 'smoke') {
    responseObj.bg = 'https://1.bp.blogspot.com/-T4Wu8ctCPo0/X1uyv0PRN8I/AAAAAAAA9xQ/fq7_QYyw6KsO4Yndbb1FIn7uAKVfQaO0wCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-09-11%2Bat%2B9.16.03%2BAM.png';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/2URo56EZPiYT7lEBrzaH6m';
  }
  if (responseObj.type === 'haze') {
    responseObj.bg = 'https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_2560%2Cc_limit/london-heatwave.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/0Rxc6YHa0xTaww7n4c8qcD';
  }
  if (responseObj.type === 'dust') {
    responseObj.bg = 'https://www.ecomena.org/wp-content/uploads/2022/08/dust-storm-iraq.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3i39Oo';
  }
  if (responseObj.type === 'fog') {
    responseObj.bg = 'https://patch.com/img/cdn20/getty/23773254/20230105/103125/styles/patch_image/public/gettyimages-1207839457___05100914123.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/2gGRE55OXf4D3zpaZbHPTa';
  }
  if (responseObj.type === 'sand') {
    responseObj.bg = 'https://i.ytimg.com/vi/iTNchgZjufE/maxresdefault.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/5KiRJGEubhwi88ANv5B6dd';
  }
  if (responseObj.type === 'ash') {
    responseObj.bg = 'https://wp.technologyreview.com/wp-content/uploads/2019/08/3evacuationimg005510-10.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/0sccPxz3hPmq55MxE8fDap';
  }
  if (responseObj.type === 'squall') {
    responseObj.bg = 'https://images.allthescience.org/squall-line.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/7ydON6rHHy0WSWzGR0k3pm';
  }
  if (responseObj.type === 'tornado') {
    responseObj.bg = 'https://images.ctfassets.net/c55i45ef3o2a/6JFopXz67W04iwkOVW2aaE/96d6aa6b25a128c6eac990fb16834c01/Screen_Shot_2021-07-24_at_12.46.58_PM.png';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/3KwvjDQMjPNKDQxnoHmDYg';
  }
  if (responseObj.type === 'clear') {
    responseObj.bg = 'https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/2JKep5C1vsXFc6U1N1OgT1';
  }
  if (responseObj.type === 'clouds') {
    responseObj.bg = 'https://cdn.weatherworksinc.com/blogs/Clouds%20cover%20photo.png';
    responseObj.playlist = 'https://open.spotify.com/embed/playlist/37i9dQZF1DWYoDXiQsd3D2';
  }

  //   console.log(apiResponse)
  res.locals.response = responseObj;
  console.log("This is res.locals: ", res.locals.response)
  return next();
};

module.exports = weatherController;

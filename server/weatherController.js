const API_KEY = '91451e57036b2ad5f68e894243eb39f7';

async function getWeather(zip) {
  const WEATHER_URL_ZIP = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;
  const weatherReq = await fetch(WEATHER_URL_ZIP);
  const apiResponse = await weatherReq.json();
  const responseObj = {
    type: apiResponse.weather[0].main,
    temp: apiResponse.main.temp,
    zip,
    city: apiResponse.name,
    iconURL: `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`,
  };
  console.log(responseObj);
  return apiResponse;
}
getWeather('32080');

// console.log(data);

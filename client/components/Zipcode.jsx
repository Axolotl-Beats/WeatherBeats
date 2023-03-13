import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateType, updateTemp, updateZipcode, updateCity, updateUrl } from '../redux/stateSlice';

// send fetch request to get weather from API based upon Zip Code

// on button click --> set location to the value of whatever is in input field

export default function Zipcode() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('10001');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState({});

  // useSelector the temp, city, type

  const { temp, city, type } = useSelector((state) => state.updater);

  useEffect(() => {
    

    // on-load, fetch weather data from the weather API
    console.log("We are pinging the weather API at", location)

  
    //invoke the function
    getWeatherData(location);


    console.log("Our response object data is:", data);
    dispatch(updateType(data.type))
    dispatch(updateTemp(data.temp))
    dispatch(updateZipcode(data.zip))
    dispatch(updateCity(data.city))
    dispatch(updateUrl(data.url))

  }, [clicked])

  function getWeatherData(input) {
    const body = JSON.stringify({ 'zip': input })
    console.log("This is the body:", body)
    fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
      .then((response) => response.json())
      .then((response) => setData(response));
  }

  return (
    <div className="column">
      <div class='box is-align-content-center is-justify-content-center'>
        <div class='card-content'>
          <input class='input' type="text" placeholder="zipcode" onChange={(e) => setLocation(e.target.value)} />
          <button onClick={() => setClicked(!clicked)}>Update Location</button>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">{type}</p>
          <p class="card-footer-item">{city}</p>
          <p class="card-footer-item">{temp}</p>
        </footer>

      </div>
      <br />
      <div className="infoBar">
        {temp}
        {city}
        {type}
      </div>
    </div>
  );
}




// <div className="column">
//       <div class='box is-align-content-center is-justify-content-center'>
//         <div class='card-content'>
//           <input class='input' type="text" placeholder="zipcode" onChange={(e) => setLocation(e.target.value)} />
//           <button onClick={() => setClicked(!clicked)}>Update Location</button>
//         </div>
//         <footer class="card-footer">
//           <p class="card-footer-item">{type}</p>
//           <p class="card-footer-item">{city}</p>
//           <p class="card-footer-item">{temp}</p>
//         </footer>

//       </div>
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateZipcode } from '../redux/stateSlice';

// send fetch request to get weather from API based upon Zip Code

// on button click --> set location to the value of whatever is in input field

export default function Zipcode() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('10001');
  const [clicked, setClicked] = useState(false);

  // useSelector the temp, city, type
  const { temp, city, type } = useSelector((state) => state.updater);

  useEffect(() => {
    // on-load, fetch weather data from the weather API
    console.log("We are pinging the weather API at", location)

    let data = getWeatherData(location);
    const { type, temp, city, url } = data;
    // Uncomment this line when we are ready to get
    dispatch(updateZipcode(location));
    // we can also write a function to send zipcode to MongoDB
  }, [clicked]);

  const weatherAPI = 'http://localhost:3000/weather'; // url

  function getWeatherData(input) {
    const body = JSON.stringify({ zip: input })
    console.log("This is the body:", body)
    fetch(weatherAPI, {
      method: 'POST',
      mode: "no-cors",
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then((response) => response.json())
      .then((response) => console.log(repsonse));
  }

  // could try doing an onSubmit instead
  return (
    <div className="column">
      <div>
        <input type="text" placeholder="zipcode" onChange={(e) => setLocation(e.target.value)} />
        <button onClick={() => setClicked(!clicked)}>Update Location</button>
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

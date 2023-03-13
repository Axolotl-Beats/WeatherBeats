import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateZipcode } from './redux/stateSlice';

// send fetch request to get weather from API based upon Zip Code

// on button click --> set location to the value of whatever is in input field

export default function Zipcode() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [clicked, setClicked] = useState(false);

  // useSelector the temp, city, type
  const { temp, city, type } = useSelector((state) => state.updater);

  useEffect(() => {
    // on-load, fetch weather data from the weather API

    const {
      type, temp, city, url,
    } = getWeatherData(location); // Uncomment this line when we are ready to get
    dispatch(updateZipcode(location));
    // we can also write a function to send zipcode to MongoDB
  }, [clicked]);

  const weatherAPI = ''; // url

  async function getWeatherData(input) {
    await fetch(weatherAPI, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
      body: {
        zip: input,
      },
    })
      .then((response) => response.json())
      .then((response) => response.body); // we may have to access a part of the response object
  }

  // could try doing an onSubmit instead
  return (
    <div className="box has-background-danger">
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

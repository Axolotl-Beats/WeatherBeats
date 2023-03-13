import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateType, updateTemp, updateZipcode, updateCity, updateUrl, updateAll,
} from '../redux/stateSlice';

// send fetch request to get weather from API based upon Zip Code

// on button click --> set location to the value of whatever is in input field

export default function Zipcode() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(10001);

  useEffect(() => {
    // on-load, fetch weather data from the weather API
    async function getWeatherData(input) {
      const body = JSON.stringify({ zip: input });
      console.log('This is the body:', body);
      const response = await fetch('/api/weather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      const newData = await response.json();
      console.log('This is body data', newData);
      return newData;
    }

    // invoke the function
    const data = getWeatherData(location);
  }, []);

  // on button click, fire reducers to update state and re-render page with new location

  function getNewWeatherData(input) {
    const body = JSON.stringify({ zip: input });
    console.log('This is the body:', body);
    fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((response) => response.json())
      .then((response) => dispatch(updateAll(response)))
      .then((response) => console.log('This is the reponse after UpdateAll', response));
  }

  const { temp, city, type } = useSelector((state) => state.updater);

  return (
    <div className="column">
      <div className="box is-align-content-center is-justify-content-center">
        <div className="card-content">
          <input className="input" type="text" placeholder="zipcode" onChange={(e) => setLocation(e.target.value)} />
          <button className="button" onClick={() => getNewWeatherData(location)}>Update Location</button>

          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
        </div>

        <footer className="card-footer">
          <p className="card-footer-item is-size-4 has-text-grey is-capitalized">{type}</p>
          <p className="card-footer-item is-size-4 has-text-grey">{city}</p>
          <p className="card-footer-item is-size-4 has-text-grey">{temp}</p>
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

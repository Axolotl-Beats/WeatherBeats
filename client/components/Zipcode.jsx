import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateType, updateTemp, updateZipcode, updateCity, updateUrl, updateAll, updateWeatherObj
} from '../redux/stateSlice';
import Axios from 'axios'

// send fetch request to get weather from API based upon Zip Code

// on button click --> set location to the value of whatever is in input field

export default function Zipcode() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(10001);
  const weatherObj = useSelector((state) => state.updater.weatherObj);

  console.log('weatherobject', weatherObj)
  // useEffect(() => {
  // }, []);

  // on button click, fire reducers to update state and re-render page with new location

  const getNewWeatherData = async (input) => {
    const body = JSON.stringify({ zip: input });
    console.log('This is the body:', body);
    const weatherObj = await Axios.post('/weather', {
      body
    })
    console.log('weather', weatherObj.data);
    dispatch(updateWeatherObj(weatherObj.data))
  }

  //const { temp, city, type } = useSelector((state) => state.updater.weatherObj);

  return (
    <div className="column">
      <div className="box is-align-content-center is-justify-content-center">
        <div className="card-content">
          <span />
        </div>

        <div className="field has-addons">
          <div className="control has-icons-left has-icons-right is-expanded">

            <input className="input has-text-weight-bold is-size-4" type="text" placeholder="ZIPCODE" onChange={(e) => setLocation(e.target.value)} />

          </div>
          <p className="control">

            <a className="button is-primary has-text-weight-bold is-size-4 has-text-light" onClick={()=>getNewWeatherData(location)}>Location</a>
          </p>
        </div>

        <footer className="card-footer">
          <p className="card-footer-item has-text-weight-bold is-size-4 has-text-grey is-capitalized">{weatherObj.city}</p>
          <p className="card-footer-item has-text-weight-bold is-size-4 has-text-grey has-text-centered">{weatherObj.type}</p>
          <p className="card-footer-item has-text-weight-bold is-size-4 has-text-grey">{weatherObj.temp}</p>
        </footer>

      </div>

    </div>
  );
}

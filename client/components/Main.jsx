import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import Zipcode from './zipcode';
import userBox from './userBox';
import Icon from './Icon';

export default function Main() {



  return (
    <div className="topGrid has-background-danger">
      <div className="weatherIcon">
        <Icon />
      </div>
      <div className="zip">
        <Zipcode />
        <h1>HELLO WORLD!</h1>
      </div>
      <div className="userBox">
        <userBox />
      </div>
    </div>
  )
};



//On page render, we will have access to a JSON object from Spotify
//On page load, we can send a Post request to our Database with the username of the persom 
//On Zip Code Use Effect Fire, 

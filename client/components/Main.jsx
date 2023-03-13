import React from 'react';
import Zipcode from './Zipcode';
import UserBox from './UserBox';
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
        <UserBox />
      </div>
    </div>
  )
};

{/* <div class="hero-head">
</div>

<!-- Hero content: will be in the middle -->
<div class="hero-body">
  <div class="container has-text-centered">
    <Login />
  </div>
</div>

<!-- Hero footer: will stick at the bottom -->
<div class="hero-foot">
</div> */}


//On page render, we will have access to a JSON object from Spotify
//On page load, we can send a Post request to our Database with the username of the persom
//On Zip Code Use Effect Fire,

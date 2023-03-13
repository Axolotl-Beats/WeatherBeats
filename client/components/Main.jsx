import React from 'react';
import Zipcode from './Zipcode.jsx';
import UserBox from './UserBox.jsx';
import Icon from './Icon.jsx';
// import Logo from '../Assets/Logo.png'

export default function Main() {

  return (
    <>
      <div class="hero-head">
        <div class='columns'>
          <Icon />
          <Zipcode />
          <UserBox />
        </div>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          {/* <div class="column is-5-tablet is-4-desktop is-4-widescreen has-text-centered"> */}
           
              <p class="title">
                Title
              </p>
              <p class="subtitle">
                Subtitle
              </p>
          
            
            
            
            
            <div id='player' class="card">
              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <a class="button is-large is-success is-fullwidth" href='https://open.spotify.com/?'>
                      SPOTIFY PLAYER
                    </a>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      <div class="hero-foot">
      </div>
    </>

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




//Original 
    // <div className="topGrid has-background-danger">
    //   <div className="weatherIcon">
    //     <Icon />
    //   </div>
    //   <div className="zip">
    //     <Zipcode />
    //     <h1>HELLO WORLD!</h1>
    //   </div>
    //   <div className="userBox">
    //     <UserBox />
    //   </div>
    // </div>
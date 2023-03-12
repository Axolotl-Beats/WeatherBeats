/* eslint-disable react/no-unknown-property */
import React from 'react';
import Logo from './Logo.png';
import { Link, Switch, Route, Router } from 'react-router-dom';


export default function Login() {

  //styling for backround image 
  const backgroundImage = {
    backgroundImage: "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')",
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }

  return (

    <section class="hero is-fullheight is-bold is-primary" style={backgroundImage}>
<div class="hero-body">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-4-widescreen">
        <form action="" class="box">
          <p className="label has-text-centered is-size-5"><img src={Logo}></img></p>
          <p className="has-text-centered is-size-6 has-text-danger" />
          <br />
          <div className="field">
            {/* <div className="control has-icons-left">
              <input type="text" placeholder="enter username" className="input" required />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </div> */}
          </div>
          <div className="field">
{/* 
            <div className="control has-icons-left">
              <input type="password" placeholder="enter password" className="input" required />
              <span className="icon is-small is-left">
                <i className="fa fa-lock" />
              </span>

            </div> */}
          </div>
          <div className="field is-grouped">
            {/* <p className="control is-expanded">
              <label htmlFor="" className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
            </p> */}
          </div>
          <br />
          <div className="field">
            <a href="https://accounts.spotify.com/en/login" className="button is-success is-fullwidth">
              Login with Spotify
            </a>
          </div>
          <br />
          <p className="has-text-centered">
            <a href="https://accounts.spotify.com/en/password-reset" className="label has-text-weight-light">
              Forgot Password?
            </a>
          </p>
          <p className="has-text-centered">
            <a href="https://www.spotify.com/us/signup?flow_id=4979c6c5-89a1-4396-aba3-6cbdef464d0b%3A1678574806&forward_url=https%3A%2F%2Faccounts.spotify.com%2Fen%2Fstatus" className="label has-text-weight-light">
              Sign Up
            </a>

          </p>

        </form>
      </div>
    </div>
  </div>
</div>
</section>

  );
}








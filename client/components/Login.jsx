/* eslint-disable react/no-unknown-property */
import React from 'react';
import Logo from '../assets/Logo.png';

export default function Login() {
  return (
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">

            <form action="" class="box">
              <br />
              <p className="label has-text-centered is-size-5"><img src={Logo} /></p>
              <p className="has-text-centered is-size-6 has-text-danger" />
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
              <br />
            </form>

            <br />

            <div class="card">
              <div class="image is-64x64" />

              <div class="card-image">
                <figure class="image">
                  <img src={Logo} alt="Placeholder image" />
                </figure>
              </div>

              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <a class="button is-large is-success is-fullwidth" href="https://open.spotify.com/?">
                      Login
                    </a>
                  </div>

                  <p class="has-text-centered">
                    <a class="label has-text-weight-light">
                      Forgot Password?
                    </a>
                  </p>

                  <p class="has-text-centered">
                    <a class="label has-text-weight-light">
                      Sign Up
                    </a>
                  </p>

                  <div class="field">
                    <label class="label has-text-centered">Forgot Password?</label>
                  </div>

                  <div class="field">
                    <label class="label has-text-centered">Sign Up</label>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

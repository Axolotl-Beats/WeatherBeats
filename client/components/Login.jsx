/* eslint-disable react/no-unknown-property */
import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../public/logo.png';
import Axios from 'axios'
import { updateAuthenticated } from '../redux/stateSlice';

export default function Login() {
  const dispatch = useDispatch();



  const dispatchFunction = async () => {
    const result = await Axios.get('/api/verifyuser');
    dispatch(updateAuthenticated(result))
  }

  return (
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <div class="card">
              <div class="image is-64x64" />

              <div class="card-content">
                <div class="content">

                    <p class="form__title">User Login</p>

                    <div class="form__input-group">
                        <input name="_username" type="text" class="form__input" autofocus placeholder="Username or email"/>
                    </div>

                    <div class="form__input-group">
                        <input name="password" type="password" class="form__input" autofocus placeholder="Password"/>
                        <div class="form__input-error-message"></div>
                    </div>

                    <button class="button is-large is-success is-fullwidth" onClick={dispatchFunction}>Login TEST</button>

                  <div class="field">
                    <label class="label has-text-centered has-text-white">Forgot Password?</label>
                  </div>

                  <div class="field">
                    <label class="label has-text-centered has-text-white">Sign Up</label>
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



/* eslint-disable react/no-unknown-property */
import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../public/logo.png';
import Axios from 'axios'
import { updateAuthenticated, updateLSContainer } from '../redux/stateSlice';

export default function Login() {
  
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  
  const handleChangeUsername = (event) => {
    setInputUsername(event.target.value);
    console.log('username', event.target.value)
  };

  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
    console.log('password', event.target.value)
  };

  const dispatch = useDispatch();

  const dispatchFunctionLogin = async () => {

    //const result = await Axios.get('/api/verifyuser'); //dummy api call for credentials
    //this code below is just forming it such that the inputs are transmitted to the endpoint,
    //but it is not yet connected properly to the backend
    
    //const result = await Axios.get(`/api/verifyuser?username=${inputUsername}&password=${inputPassword}`)
    //console.log(result)

    //dispatch(updateAuthenticated(result.data))
    dispatch(updateAuthenticated(true))
    console.log('result', result.data)
  }

  const dispatchFunctionLSContainer = () => {
    dispatch(updateLSContainer('signup'))
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
                        <input name="username" type="text" class="form__input" autofocus placeholder="Username or email" onChange={handleChangeUsername}/>
                    </div>

                    <div class="form__input-group">
                        <input name="password" type="password" class="form__input" autofocus placeholder="Password" onChange={handleChangePassword}/>
                        <div class="form__input-error-message"></div>
                    </div>

                    <button class="button is-large is-success is-fullwidth" onClick={dispatchFunctionLogin}>Login TEST</button>

                  <div class="field">
                    <label class="label has-text-centered has-text-white">Forgot Password?</label>
                  </div>

                  <div class="field">
                    <label class="label has-text-centered has-text-white" onClick={dispatchFunctionLSContainer}>Sign Up</label>
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



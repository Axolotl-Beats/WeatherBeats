/* eslint-disable react/no-unknown-property */
import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../public/logo.png';
import Axios from 'axios'
import { updateAuthenticated, updateLSContainer } from '../redux/stateSlice';

export default function Signup() {
  
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [inputEmail, setInputEmail] = useState('');
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputLastName, setInputLastName] = useState('');

  const [inputImage, setInputImage] = useState('');
  
  const handleChangeUsername = (event) => {
    setInputUsername(event.target.value);
    console.log('username', event.target.value)
  };

  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
    console.log('password', event.target.value)
  };

  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
    console.log('email', event.target.value)
  };

  const handleChangeFirstName = (event) => {
    setInputFirstName(event.target.value);
    console.log('firstname', event.target.value)
  };

  const handleChangeLastName = (event) => {
    setInputLastName(event.target.value);
    console.log('lastname', event.target.value)
  };

  const handleChangeImage = (event) => {
    setInputImage(event.target.value);
    console.log('image', event.target.value)
  };

  const dispatch = useDispatch();

  const dispatchFunctionLSContainer = () => {
    dispatch(updateLSContainer('login'))
  }
//   const dispatch = useDispatch();

//   const dispatchFunction = async () => {
//     const result = await Axios.get('/api/verifyuser');
//     dispatch(updateAuthenticated(result))
//   }

  return (
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <div class="card">
              <div class="image is-64x64" />

              <div class="card-content">
                <div class="content">

                    <p class="form__title">Signup</p>

                    <div class="form__input-group">
                        <input name="username" type="text" class="form__input" autofocus placeholder="Username" onChange={handleChangeUsername}/>
                    </div>

                    <div class="form__input-group">
                        <input name="password" type="password" class="form__input" autofocus placeholder="Password" onChange={handleChangePassword}/>
                        <div class="form__input-error-message"></div>
                    </div>

                    <div class="form__input-group">
                        <input name="email" type="text" class="form__input" autofocus placeholder="Email" onChange={handleChangeEmail}/>
                    </div>

                    <div class="form__input-group">
                        <input name="firstName" type="text" class="form__input" autofocus placeholder="First Name" onChange={handleChangeFirstName}/>
                    </div>

                    <div class="form__input-group">
                        <input name="lastName" type="text" class="form__input" autofocus placeholder="Last Name" onChange={handleChangeLastName}/>
                    </div>

                    <div class="form__input-group">
                        <input name="imageLink" type="text" class="form__input" autofocus placeholder="Image Link" onChange={handleChangeImage}/>
                    </div>

                    <button class="button is-large is-success is-fullwidth">SIGNUP</button>

                  <div class="field">
                    <label onClick={dispatchFunctionLSContainer} class="label has-text-centered has-text-white">Sign In</label>
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



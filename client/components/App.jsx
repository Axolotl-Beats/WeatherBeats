import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Main from './Main';
import LoginSignUpContainer from './LoginSignupContainer';
// import WebPlayback from './WebPlayback';
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom'

export default function App() {
  const authenticated = useSelector((state) => state.updater.authenticated);
  const weatherObj = useSelector((state) => state.updater.weatherObj);

  return (

    <section id="app" className="hero is-fullheight" style={{backgroundImage: `url(${weatherObj.bg})`}}>
        {authenticated? <Main /> : <LoginSignUpContainer />}
    </section>
  );
}

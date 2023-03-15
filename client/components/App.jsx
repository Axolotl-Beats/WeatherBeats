import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Main from './Main';
import LoginSignUpContainer from './LoginSignupContainer';
// import WebPlayback from './WebPlayback';
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom'

export default function App() {
  //const [token, setToken] = useState('');
  const authenticated = useSelector((state) => state.updater.authenticated);

  useEffect(() => {
    // async function getToken() {
    //   const response = await fetch('/auth/token');
    //   const json = await response.json();
    //   // saves token to state
    //   setToken(json.access_token);
    // }
    // getToken();
  }, []);

  return (
    <section id="app" className="hero is-fullheight">
        {authenticated? <Main /> : <LoginSignUpContainer />}
    </section>
  );
}

// {backgroundImage: `url(${bg})`}

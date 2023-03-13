import React, { useState, useEffect } from 'react';
import Main from './Main.jsx';
import { useSelector } from 'react-redux';
import { Link, Switch, Route, Router } from 'react-router-dom';



import WebPlayback from './WebPlayback';
import Login from './Login';
// using dotenv

export default function App() {
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
  // getting the token and then assigning a state
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      // saves token to state
      setToken(json.access_token);
    }
    // setToken();
    getToken();
  }, []);

  // if token is empty, render login, else render web playback compennt
  return (
    <div>
      {/* <section>
        <Login></Login>
      </section> */}
      <div className="box has-color-danger">
        <Main></Main>
      </div>

    </div>
  )
}

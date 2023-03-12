import React, { useState, useEffect } from 'react';
import WebPlayback from './components/WebPlayback';
import Login from './components/Login';
// using dotenv

// functional coponents only guys
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
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

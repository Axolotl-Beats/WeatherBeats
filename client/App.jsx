<<<<<<< Updated upstream
import React from 'react';

// functional coponents only guys

function App() {
=======
import React, { useState, useEffect } from 'react';
import WebPlayback from './components/WebPlayback';
import Login from './components/Login';
// using dotenv

// functional coponents only guys
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

/*
SPOTIFY_CLIENT_ID='fb1f4814ef0d4dae902a14b5a97bde23'
SPOTIFY_CLIENT_SECRET='ee373bcea76f4a169db922753c79ba4f'
SPOTIFY_TOKEN = "
BQAh5ac8RMh-PM-MfzX8BnGy8s7gm4atP0lqaCkFcqDi9KRekzsO4zGauygZ1ddpw7RFTc1hT_WeuyXZUZ81gdCU9w5PcVEqtTWyoz7JmQtcHWYZPZxT85Mb-QNkZ-nW3LY_pnI3Kj22LrhtV0k04G-5iSJtjFUVh4dFtyg5q_0oHld1R3sAM2HpCaCckxEI7HFpHhleaMzxe_pNkQ7iWTEOe35-KYp-eOcJwS_B0zc3I_-_p9trqK483BsNWiWF5b1nx2r3lyiVxIXcwC6eBQ"

function App() {

  return (
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}

 */

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
>>>>>>> Stashed changes
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

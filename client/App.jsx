import React, { useState, useEffect } from 'react';
import WebPlayback from './components/WebPlayback';
// using dotenv

// functional coponents only guys
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

/*

function App() {

  return (
    <>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}

 */

function App() {
  const [token, setToken] = useState(process.env.SPOTIFY_TOKEN);

  useEffect(() => {
  // getting the token and then assigning a state
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }
    setToken(process.env.SPOTIFY_TOKEN);
    // getToken();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      { (token === '') ? <Login /> : <WebPlayback token={token} /> }

    </div>
  );
}

export default App;

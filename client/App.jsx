import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Player from './components/PlayerTest';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    // right now the token just fetches from the server sessions
    // TODO: have the token refresh if it is expired (include timestamp in session)
    // TODO: for some reason, fetching the token just give an empty object. working on this later
    const fetchToken = async () => {
      try {
        const response = await fetch('/auth/token');
        const data = await response.json();
        const { accessToken } = data;
        setToken(accessToken);
      } catch (error) {
        console.error('Token fetch error: ', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <div>
      <h1>
        my token:
        {token}
      </h1>
      {/* example track uri passed as a prop. will hard code it in backend later */}
      { (!token) ? <Login /> : <Player token={token} trackUri="spotify:track:6rqhFgbbKwnb9MLmUQDhG6" /> }

    </div>
  );
}

export default App;

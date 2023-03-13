import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Player from './components/PlayerTest';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/auth/token');
        const data = await response.json();
        const { accessToken } = data;
        setToken(accessToken);
      } catch (error) {
        console.error(error);
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
      { (!token) ? <Login /> : <Player token={token} trackUri="spotify:track:6rqhFgbbKwnb9MLmUQDhG6" /> }

    </div>
  );
}

export default App;

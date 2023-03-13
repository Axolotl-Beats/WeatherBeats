import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import WebPlayback from './components/WebPlayback';

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
      <h1>Hello World</h1>
      { (token === '') ? <Login /> : <WebPlayback token={token} /> }

    </div>
  );
}

export default App;

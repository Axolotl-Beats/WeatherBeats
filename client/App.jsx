import React, { useEffect } from 'react';
import useSetState from 'react-use';
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-node';
// using dotenv

// functional coponents only guys
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

function App() {
  // https://medium.com/@t93/states-and-componentdidmount-in-functional-components-with-hooks-cac5484d22ad
  useEffect(() => {

  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <iframe title="title" src="https://open.spotify.com/embed/playlist/0RH319xCjeU8VyTSqCF6M4?utm_source=generator" width="30%" height="200" frameBorder="0" allowfullscreen="" async />
      </div>
    </div>
  );
}

export default App;

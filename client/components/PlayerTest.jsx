import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [token]);

  return (
    <SpotifyPlayer
      token={token}
      uris={[trackUri]}
      styles={{
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />
  );
}

export default Player;

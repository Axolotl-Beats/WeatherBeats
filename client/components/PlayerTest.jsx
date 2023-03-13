import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [token]);

  // useEffect(() => {
  //   const checkTokenExpiration = async () => {
  //     const expirationTime = localStorage.getItem('spotifyTokenExpiration');
  //     if (expirationTime && Date.now() >= expirationTime) {
  //       const response = await fetch('/auth/refreshToken');
  //       const data = await response.json();
  //       setToken(data.accessToken);
  //       localStorage.setItem('spotifyTokenExpiration', Date.now() + (data.expiresIn * 1000));
  //     }
  // };
  //   checkTokenExpiration();
  // }, []);

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

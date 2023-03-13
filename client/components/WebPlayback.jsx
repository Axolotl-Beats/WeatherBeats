import React, { useEffect, useRef, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const track = {
  name: '',
  album: {
    images: [
      { url: '' },
    ],
  },
  artists: [
    { name: '' },
  ],
};

function WebPlayback({ token }) {
  const playerRef = useRef(null);
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/auth/callback',
  });

  const [currentTrack, setTrack] = useState(track);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb) => { cb(token); },
        volume: 0.5,
      });

      player.addListener('ready', ({ deviceId }) => {
        console.log('Ready with Device ID', deviceId);
      });

      // Not Ready
      player.addListener('not_ready', ({ deviceId }) => {
        console.log('Device ID has gone offline', deviceId);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });

      player.connect();
      playerRef.current = player;

      // was missing this part
      spotifyApi.setAccessToken(token);
    };
  }, [token]);

  return (
    <div className="container">
      <div id="player">
        <div className="main-wrapper">
          <img
            src={currentTrack.album.images[0].url}
            className="now-playing__cover"
            alt=""
          />
          <div className="now-playing__side">
            <div className="now-playing__name">
              { currentTrack.name }
            </div>
            <div className="now-playing__artist">
              { currentTrack.artists[0].name }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebPlayback;

import React, { useState, useEffect } from 'react';

function WebPlayback({ token }) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  const track = {
    name: 'The Dark Side Of The Moon (2011 Remastered Version)',
    album: {
      images: [
        { url: 'https://i.scdn.co/image/ab67616d00001e0205d4eec40a828850aa8cd2f7' },
      ],
    },
    artists: [
      { name: 'lkjsdlfg' },
    ],
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => { cb(token); },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ deviceId }) => {
        console.log('Ready with Device ID', deviceId);
      });

      player.addListener('not_ready', ({ deviceId }) => {
        console.log('Device ID has gone offline', deviceId);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) return;

        player.setTrack(state.trackWindow.currentTrack);
      });

      player.connect();
    };
    window.onSpotifyWebPlaybackSDKReady();
  }, []);

  return (
    <div className="container">
      <div className="main-wrapper">
        <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />
        <div className="now-playing__side">
          {/* <div className="now-playing__name">{ current_track.name }</div> */}
          {/* <div className="now-playing__artist">{ current_track.artists[0].name }</div> */}
        </div>
        <div id="buttonWrapper">
          <button type="submit" className="btn-spotify" onClick={() => { player.previousTrack(); }}>
            &lt;&lt;
          </button>

          <button type="submit" className="btn-spotify" onClick={() => { player.togglePlay(); }}>
            { is_paused ? 'PLAY' : 'PAUSE' }
          </button>

          <button type="submit" className="btn-spotify" onClick={() => { player.nextTrack(); }}>
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebPlayback;

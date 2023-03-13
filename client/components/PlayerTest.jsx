import React from 'react';
import { Spotify } from 'react-spotify-embed';

function Player({ token, trackUri }) {
  return (
    <Spotify
      link={`https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw?access_token=${token}`}
      size={{ width: '100%', height: 300 }}
      view="coverart"
      theme="black"
    />
  );
}

export default Player;

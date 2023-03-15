import React from 'react';

function Player({ playlistUri }) {

  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistUri['rainy']}`}
      title="Spotify Player"
      width="300"
      height="380"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
}

export default Player;

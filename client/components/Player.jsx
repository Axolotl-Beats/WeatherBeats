import React from 'react';

function Player({ token, playlistUri }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistUri}?access_token=${token}&autoplay=true`}
      title="Spotify Player"
      width="300"
      height="380"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
}

// https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj?si=491b69f1290a4f93
export default Player;

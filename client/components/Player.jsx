import React from 'react';
import { useSelector } from 'react-redux';

function Player({ playlistUri }) {
  const weatherObj = useSelector((state) => state.updater.weatherObj);
  return (
    <iframe
      src={`${weatherObj.playlist}`}
      title="Spotify Player"
      width="300"
      height="380"
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
}

export default Player;

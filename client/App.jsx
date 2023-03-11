import React, { useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-node';
// functional coponents only guys

function App() {
  //
  const [
    {
      hideAttribution, inlineVolume, isPlaying, layout, styles, token, URIs,
    },
    setState,
  ] = useSetState < State > ({
    hideAttribution: false,
    inlineVolume: true,
    isPlaying: false,
    layout: 'responsive',
    styles: undefined,
    token: savedToken || '',
    URIs: ['spotify:album:79ONNoS4M9tfIA1mYLBYVX'],
  });

  const api = new SpotifyWebApi({
    clientId: 'fb1f4814ef0d4dae902a14b5a97bde23',
    clientSecret: 'ee373bcea76f4a169db922753c79ba4f',
    redirectUri: 'http://localhost:8080/',
  });
  const myToken = 'BQC7ZOfEGRlOomdEAQwJ1JFwvmykeUe7idTfZ8NIqdu1KoaOm7d2cJOoy-7nQ4a6VlDXpkz9F86_fZE7daYNDBVWJ3CBgcLOraZDI0Ae9jCX4q941NNFZHO1q_pPiwRvrpQDs34MN_WnmTVgIgs3gvxz2sMfi7xLsmUBIGuOzHCs8OJ_gP7xw0VbvITF5YrgtKWSlsADMFRRFdaMchj-G4mbm26afpzgvatui5A2LRr2ff6utFI1EhfQSlB7K6KExnHj5_HF8zT6IVIlG7L-sA';
  return (
    <div>
      <h1>Hello World</h1>
      <SpotifyPlayer token={myToken} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import { updateUrl } from '../redux/stateSlice';

export default function Icon() {
  const url = useSelector((state) => state.updater);

  return (
    <div className="column">
      <figure className="image">
        '../assets/resource/Logo.png'
        <image src={url} alt="Placeholder image" />
      </figure>
    </div>
  );
}

//
//   <div><p>
//     WeatherBeats Icon
//   </div>
// </div>

// <div class='column'>
//   <img src={} /><img>
// </div>

import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../public/logo.png';
import { updateUrl } from '../redux/stateSlice';

export default function Icon() {
  const url = useSelector((state) => state.updater);

  return (
    <div className="column">
      <div className="box is-fullheight">
        <figure className="image">
          <img src={Logo} alt="Placeholder image" />
        </figure>
      </div>
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

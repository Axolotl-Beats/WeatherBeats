import React from 'react';
import Logo from '../../public/Logo.png';
import { useSelector } from 'react-redux';
import { updateUrl } from '../redux/stateSlice';

export default function Icon() {
  const url = useSelector((state) => state.updater);

  return (
    <div class='column'>
      <div class='box is-fullheight'>
        <figure class="image">
          <img src={Logo} alt="Placeholder image"></img>
        </figure>
      </div>
    </div>
  )
}

// 
//   <div><p>
//     WeatherBeats Icon
//   </div>
// </div>

    // <div class='column'>
    //   <img src={} /><img>
    // </div>

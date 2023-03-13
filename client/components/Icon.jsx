import React from 'react';
import Logo from '../../public/Logo.png';
import { useSelector } from 'react-redux';
import { updateUrl } from '../redux/stateSlice';


export default function Icon() {
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
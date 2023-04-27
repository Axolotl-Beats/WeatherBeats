import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlaylist } from '../redux/stateSlice';
import Zipcode from './Zipcode';
import UserBox from './UserBox';
import Icon from './Icon';
import Logo from '../../public/logo.png';
import Player from './Player';
import Login from './Login';

export default function Main() {
  const dispatch = useDispatch();
  // const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  // const [playlist, setPlaylist] = useState('4ANPW38qMEYQ3Z1mVLrtmm');
  const weatherType = useSelector((state) => state.updater.type);
  const playlist = useSelector((state) => state.updater.playlist);

  return (
    <>
      <div className="hero-head">
        <div className="columns">
          <Icon />
          <Zipcode />
          <UserBox />
        </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">

          <div id="player" className="card">
            <div className="card-content">
              <div className="content">
                <div className="field">
                  <Player playlistUri={playlist} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot" />
    </>
  );
}
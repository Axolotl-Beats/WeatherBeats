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
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  // const [playlist, setPlaylist] = useState('4ANPW38qMEYQ3Z1mVLrtmm');
  const weatherType = useSelector((state) => state.updater.type);
  const playlist = useSelector((state) => state.updater.playlist);

  function changePlaylist(type) {
    if (type === 'clouds') {
      return dispatch(updatePlaylist('37i9dQZF1EIfv2exTKzl3M'));
    }
    if (type === 'clear') {
      return dispatch(updatePlaylist('6VCXXQSDMXLYaHNaWPx11S'));
    }
    if (type === 'rain') {
      return dispatch(updatePlaylist('4ANPW38qMEYQ3Z1mVLrtmm'));
    }
  }

  useEffect(() => {
    // right now the token just fetches from the server sessions
    // TODO: have the token refresh if it is expired (include timestamp in session)
    // TODO: for some reason, fetching the token just give an empty object. working on this later
    const fetchToken = async () => {
      try {
        const response = await fetch('/auth/token');
        const data = await response.json();
        const { accessToken } = data;
        setToken(accessToken.trim());
      } catch (error) {
        console.error('Token fetch error: ', error);
      }
    };
    console.log('Current token ', token);

    // fetch userdata
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('User data fetch error: ', error);
      }
    };
    fetchToken();
    fetchUserData();

    // set playlist based on weather type
    console.log('weather ', weatherType);
    changePlaylist(weatherType);
    console.log('changePlaylist', playlist);
  }, [token]);

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
                  { (!token) ? <Login /> : <Player token={token} playlistUri={playlist} /> }
                  {/* { (!token) ? <Login /> : <Player token={token} playlistUri="37i9dQZF1EIfv2exTKzl3M" /> } */}
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

// On page render, we will have access to a JSON object from Spotify
// On page load, we can send a Post request to our Database with the username of the persom
// On Zip Code Use Effect Fire

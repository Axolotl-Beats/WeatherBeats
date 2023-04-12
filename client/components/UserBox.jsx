import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { updateProfile } from '../redux/stateSlice';

export default function UserBox() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.updater.profile);

  const dispatchFunction = async () => {
    const result = await Axios.get('/api/getuserdetails');
    dispatch(updateProfile(result.data))
  }

  useEffect(async () => {
    dispatchFunction()
  }, []);

  return (
    <div className="column">
      <div className="box is-size-4 has-text-white is-full-height">
        <img src={profile.profilePic}></img>
         <p>
          Welcome
          {profile.name}
          !
        </p>
        <p>{profile.email}</p>
        <button className="button is-primary is-small">Log Out</button>
      </div>
    </div>
  );
}

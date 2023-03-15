import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { updateProfile } from '../redux/stateSlice';
import Login from './Login';
import Signup from './Signup';

export default function LoginSignupContainer() {
    const LSContainer = useSelector((state) => state.updater.LSContainer);
    console.log('LSContainer', LSContainer)

    return (
        <>
        {LSContainer==='login'? <Login />: <Signup />}
        </>
    )
}

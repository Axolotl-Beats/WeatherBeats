import React from 'react';
import Login from './Login';
import Main from './Main.jsx';
import { useSelector } from 'react-redux';
import { Link, Switch, Route, Router } from 'react-router-dom';




export default function App() {

  return (
    <div>
      {/* <section>
        <Login></Login>
      </section> */}
      <div className="box has-color-danger">
        <Main></Main>
      </div>

    </div>
  )
}


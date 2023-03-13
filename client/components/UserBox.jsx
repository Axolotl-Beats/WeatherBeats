import React from 'react';
import { useSelector } from 'react-redux';

export default function UserBox(props) {
  const username = useSelector((state) => state.updater.username);

  return (
    <div className="column">
      <div className="box">
        Welcome
        {' '}
        {username}
        !
        <button type="submit" className="button is-primary is-small">Log Out</button>
      </div>

    </div>
  );
}

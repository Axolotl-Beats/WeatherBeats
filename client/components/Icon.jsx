import React from 'react';
import { useSelector } from 'react-redux';

export default function Icon() {
  // grab icon url from state
  const url = useSelector((state) => state.updater.url);

  // we should save the different images in local

  return (
    <div>
      <img src={url} />
    </div>
  );
}

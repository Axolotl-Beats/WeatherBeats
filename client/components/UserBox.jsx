import React from "react";
import { useSelector } from "react-redux";

export default function UserBox ()  {
  const username = useSelector((state) => state.updater.username)

  return(
    <div>
      Welcome {username}!
      <button>Log Out</button>
    </div>
  )
}
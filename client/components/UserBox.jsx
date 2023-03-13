import React from "react";
import { useSelector } from "react-redux";

export default function UserBox() {
  const username = useSelector((state) => state.updater.username)

  return (
    <div class='column'>
      <div class='box'>
        Welcome {username}!
        <button class='button is-primary is-small'>Log Out</button>
      </div>

    </div>
  )
}

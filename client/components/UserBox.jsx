import React from "react";
import { useSelector } from "react-redux";

export default function UserBox() {
  const username = useSelector((state) => state.updater.username)

  return (
    <div class='column'>
      <div class='box is-size-1 has-text-white is-full-height'>
        <p>Welcome User{username}!</p>
        <button class='button is-primary is-small'>Log Out</button>
      </div>
    </div>
  )
}

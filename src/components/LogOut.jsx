import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const LogOut = () => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className={style.button} onClick={logOut}>
      Logout
    </button>
  );
};

export default LogOut;

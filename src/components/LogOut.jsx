import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const style = {
  button: `bg-zinc-800 text-white hover:bg-red-800 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 transform transition-all duration-[500ms]`,
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

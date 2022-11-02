import React, { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const style = {
  button: ``,
};

const LogOut = ({ user }) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("Logout success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="text-white flex items-center space-x-2">
        <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" />
        <h3
          className="bg-zinc-800 text-white hover:bg-red-800 px-4 py-2 rounded-md cursor-pointer transform transition-all duration-[500ms]"
          onClick={logOut}
        >
          Logout
        </h3>
      </div>
    </>
  );
};

export default LogOut;

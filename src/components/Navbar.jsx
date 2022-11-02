import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import Icon from "../../public/favicon.ico";

const style = {
  nav: `bg-black h-20 flex justify-between items-center p-4`,
  heading: `text-white text-2xl font-medium`,
};
const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <div className="flex items-center space-x-2">
        <img src={Icon} alt="icon" className="w-7 h-7" />
        <h1 className={style.heading}>Lets Chat</h1>
      </div>
      {user ? <LogOut user={user} /> : <SignIn />}
    </div>
  );
};

export default Navbar;

import React from "react";
import "../styles.css/Header.css";
import Profilepic from "../styles.css/images/profilepic.jpeg";

function Header() {
  return (
    <header className="header-div">
      <h1 className="header">הפרלמנט</h1>
      <img className="profile-pic" src={Profilepic} alt="" />
    </header>
  );
}

export default Header;

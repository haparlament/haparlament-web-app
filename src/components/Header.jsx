import React from "react";
import "../styles.css/Header.css";
import Profilepic from "../styles.css/images/profilepic.jpeg";

function Header() {
  return (
    <header className="header-div">
      <h3 className="header">הפרלמנט</h3>
      <img className="profile-pic" src={Profilepic} alt="" />
    </header>
  );
}

export default Header;

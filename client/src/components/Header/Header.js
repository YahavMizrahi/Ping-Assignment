import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div 
      className="container"
          >
      <img
        className="header-logo"
        src="https://www.pinclipart.com/picdir/big/85-854550_pingpong-hd-png-transparent-pingpong-hd-png-images.png"
        alt="logo"
      />
      <h1>Ping Assignment</h1>
    </div>
  );
};

export default Header;

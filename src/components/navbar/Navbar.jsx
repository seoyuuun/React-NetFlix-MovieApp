import { useState } from "react";
import "./navbar.scss";
import { FaSistrix, FaBell } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import React from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netfilx Logo"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSistrix className="icon" />
          <span>KID</span>
          <FaBell className="icon" />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="profile">
            <VscTriangleDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
//import Header from "./Components/Header/Header";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
function Header() {
  return (
    <section className="h-wrapper ">
      <div className="flexCenter paddings inner-width h-container">
        <img src="./logo.png" width={100} alt="logo" />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div className="menu-icon">
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;

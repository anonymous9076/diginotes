import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h1>DGN</h1>
        </div>
        <ul className="nav-item-list">
          <li>Home</li>
          <li>About</li>
          <li>Notes</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu,setMenu]=useState(false)
  const scrollToTop = (e) => {
    if(e===1)
    window.scrollTo({
      top: 0, // Scroll to 100vh from the top
      behavior: 'smooth'
    })
    if(e===2)
    window.scrollTo({
      top: window.innerHeight, // Scroll to 100vh from the top
      behavior: 'smooth'
    })
    if(e===3)
    window.scrollTo({
      top:2* window.innerHeight, // Scroll to 100vh from the top
      behavior: 'smooth'
    })
    if(e===4)
    window.scrollTo({
      top: 3*window.innerHeight, // Scroll to 100vh from the top
      behavior: 'smooth'
    })
    if(e===5)
    window.scrollTo({
      top: 4*window.innerHeight, // Scroll to 100vh from the top
      behavior: 'smooth'
    })
    ;}
  return (
    <>
      <div className={menu?"nav active" : "nav"}>
        <div className="logo">
          <h1>DGN</h1>
        </div>
        <div className="nav-menu">
          <FiMenu className="open-menu" onClick={()=>setMenu(true)}></FiMenu>
          <RxCross2 className="close-menu" onClick={()=>setMenu(false)}></RxCross2>
        </div>

        <ul className="nav-item-list"  >
          <li onClick={()=>scrollToTop(1)}>Home</li>
          <li onClick={()=>scrollToTop(2)}>Career</li>
          <li onClick={()=>scrollToTop(3)}>About</li>
          <li onClick={()=>scrollToTop(4)}>Contact</li>
          <li onClick={()=>scrollToTop(5)}>Motive</li>
         
        </ul>
      </div>
    </>
  );
};
export default Navbar;

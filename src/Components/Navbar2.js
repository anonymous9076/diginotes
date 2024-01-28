import React, { useState } from "react";
import "./Navbar2.css";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [profile,setProfile]=useState(false)
    const handleclose=(value)=>{
        setProfile(value)
    }
    return (
        <>
            <div className={menu ? "nav2 active" : "nav2"}>
                <div className="nav2-icon">
                    <div className="nav2-menu">
                        <FiMenu className="open-menu2" onClick={() => setMenu(true)}></FiMenu>
                        <RxCross2 className="close-menu2" onClick={() => setMenu(false)}></RxCross2>
                    </div>
                </div>
                <div className="nav2-center">
                    <span className="mobile-logo3"><div className="logo3"><h1>DGN</h1></div></span>
                    <ul className="nav2-list">
                        <li><Link className="link" to='/dashboard'>Dashboard</Link></li>
                        <li><Link className="link" to='/upload'>Upload</Link></li>
                        <li id='inside-logo'><div className="logo3"><h1>DGN</h1></div></li>
                        <li><Link className="link" to='/saved'>Saved</Link></li>
                        <li>Troubleshoot</li>
                    </ul>
                    <hr className="line"></hr>
                </div>
                <div className="nav2-profile">
                    <span className="nav-profile-img" onClick={()=>setProfile(true)}>
                    </span>

                </div>
                    <Profile 
                    profile={profile}
                    handleclose={handleclose}
                    ></Profile>
            </div>
        </>
    );
};
export default Navbar;

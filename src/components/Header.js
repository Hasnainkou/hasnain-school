import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import "./compostyle.css";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  window.onscroll = function () {
    var nav = document.getElementById('head45');
    if (window.scrollY > 40) {
      nav.classList.add("navbar1");
    } else {
      nav.classList.remove("navbar1");
    }
  }

  return (<>

    <div className="maincon">

      <div className="warperr" id="head45" >
        <NavLink to="/" className="textdec ">
          <div> School Management App By Hasnain</div>
        </NavLink>
        <Nav />
        <div className="login">

          <div className="header-three-lins" onClick={() => setToggle(!toggle)} >
            {toggle && (<VscChromeClose />
            )}
            {!toggle && (<AiOutlineMenu />
            )}
          </div>
        </div>
      </div>
    </div>
    {toggle && (
      <div className="headertoggle">
        <div>      <div className="navyi1">
          <div className="header-center-li">
            <NavLink to="/" className="textdec3" onClick={() => setToggle(!toggle)}>
              Home
            </NavLink>
          </div>
          <div className="header-center-li">
            <NavLink to="/admin" className="textdec3" onClick={() => setToggle(!toggle)}>
              Admin
            </NavLink>
          </div>
          <div className="header-center-li">
            <NavLink to="/teacher" className="textdec3" onClick={() => setToggle(!toggle)}>
              Teacher
            </NavLink>
          </div>
          <div className="header-center-li">
            <NavLink to="/student" className="textdec3" onClick={() => setToggle(!toggle)}>
              Student
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Header;

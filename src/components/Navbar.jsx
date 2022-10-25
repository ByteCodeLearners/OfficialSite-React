import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../byte-code-learners.svg";
import cuhlogo from "../images/cuhlogo.png";

export const navBtn = () => {
  var navBtn = document.getElementsByClassName("nav-btns")[0];
  navBtn.classList.toggle("nav-btn");

  if (window.screen.width <= 550) {
    window.scrollTo(0, 10);
  }
};
export const sticky = () => {
  var nav = document.getElementsByClassName("navbar")[0];
  var club = document.getElementsByClassName("club")[0];
  if (window.screen.width > 550) {
    nav.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
      club.classList.add("showClub");
    } else {
      club.classList.remove("showClub");
    }
  } else {
    club.classList.add("showClub");
  }
};
const handleMenuBtn = () => {
  var navBtn = document.getElementsByClassName("nav-btns")[0];
  var bars = document.getElementsByClassName("menu-btn")[0];
  if (
    navBtn.classList.contains("nav-btn") &&
    bars.classList.contains("fa-bars")
  ) {
    bars.classList.replace("fa-bars", "fa-times");
  } else {
    bars.classList.replace("fa-times", "fa-bars");
  }
};
export default function Navbar() {
  window.addEventListener("load", () => {
    sticky();
  });

  window.addEventListener("scroll", sticky);
  useEffect(() => {
    if (window.screen.availWidth > 550) {
      sticky();
      window.scrollTo(0, 20);
    }
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={cuhlogo} alt="Logo" height={69} />
        <NavLink to="/">
          <img className="bytecodelogo" src={logo} alt="Logo" />
        </NavLink>
        <div className="club">
          <p>Bytecode</p>
          <p>Learners</p>
        </div>
      </div>
      <i
        className="fas menu-btn fa-bars"
        onClick={() => {
          navBtn();
          handleMenuBtn();
        }}
      ></i>
      <ul
        className="nav-btns"
        onClick={() => {
          navBtn();
          handleMenuBtn();
        }}
      >
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events-gallery">
            <i className="fab fa-elementor"></i>Event Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/batches">
            <i className="fas fa-users"></i>Batches
          </NavLink>
        </li>
        <li>
          <NavLink to="/registration">
            <i className="fas fa-file-signature"></i>Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/initiator">
            <i className="fas fa-fist-raised"></i>Intiator
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">
            <i className="fas fa-comments"></i>Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

// import React from 'react';
// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="logo">
//                 <p>Bytecode</p>
//                 <p>Learners</p>
//             </div>
//             <div className="nav">
//                 <p>Home</p>
//                 <p>Event Gallery</p>
//                 <p>Batches</p>
//             </div>
//             {/* <div className="waves navwaves">
//                 <div className="wave" id="wave1"></div>
//                 <div className="wave" id="wave2"></div>
//                 <div className="wave" id="wave3"></div>
//                 <div className="wave" id="wave4"></div>
//             </div> */}
//         </div>
//      );
// }

// export default Navbar;

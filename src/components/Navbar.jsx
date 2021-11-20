import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../byte-code-learners.svg";
export const navBtn = ()=>{
  var navBtn = document.getElementsByClassName("nav-btns")[0];
  navBtn.classList.toggle('nav-btn');

  if(window.screen.width<=550){
    window.scrollTo(0,10);
  }
}
export const sticky=()=>{
  var nav = document.getElementsByClassName('navbar')[0];
  var club = document.getElementsByClassName("club")[0];
    if(window.screen.width>550){
      nav.classList.toggle("sticky",window.scrollY>0);
      if(window.scrollY>0){
          club.classList.add('showClub');
      }else{
          club.classList.remove('showClub');
        }
      }else{
      club.classList.add('showClub');
    }
}
export default function Navbar(){
  window.addEventListener("load",()=>{
    sticky();
  })

  
  window.addEventListener("scroll",sticky);
  useEffect(()=>{
    if(window.screen.availWidth>550){
      sticky();
      window.scrollTo(0,20);
    }
  },[]);
  return(
    <div className="navbar">
      <div className="logo">
          <NavLink to="/react_bcl">
            <img src={logo} alt="Logo" />
          </NavLink>
            <div className="club">
                <p>Bytecode</p>
                <p>Learners</p>
            </div>
      </div>
      <i class="fas fa-bars" onClick={navBtn}></i>
      <ul className="nav-btns" onClick={navBtn}>
        <li><NavLink to="/react_bcl">Home</NavLink></li>
        <li><NavLink to="/react_bcl/events-gallery">Event Gallery</NavLink></li>
        <li><NavLink to="/react_bcl/batches">Batches</NavLink></li>
        <li><NavLink to="/react_bcl/registration">Registration</NavLink></li>
        <li><NavLink to="/react_bcl/initiator">Intiator</NavLink></li>
        <li><NavLink to="/react_bcl/contact-us">Contact Us</NavLink></li>
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
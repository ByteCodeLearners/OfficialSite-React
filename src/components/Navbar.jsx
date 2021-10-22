import React from 'react';
import logo from "../byte-code-learners.svg";

export default function Navbar(){
  function sticky(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky",window.scrollY>0);
    var club = document.getElementById("club");
    if(window.scrollY>0){
        club.style.display = "block";
    }else{
        club.style.display = "none";
    }
  }
  window.addEventListener("scroll",sticky);
  return(
    <div className="navbar">
      <div className="logo">
          <img src={logo} alt="Logo" />
          <div id="club">
              <p>Bytecode</p>
              <p>Learners</p>
          </div>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Event Gallery</a></li>
        <li><a href="#">Batches</a></li>
        <li><a href="#">Registration</a></li>
        <li><a href="#">Intiator</a></li>
        <li><a href="#">Contact Us</a></li>
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
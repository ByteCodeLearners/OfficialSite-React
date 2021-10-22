import React from "react";

export default function Footer(){
  return(
    <div className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="details">
      <h2>ByteCode Learners</h2>
        <p>About Us</p>
        <p>ByteCodeLearners Community is an initiative to promote Project based learning .</p>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email- bytecodelearners@gmail.com</p>
      </div>

    </div>
  );
}
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import socialmedia from "../setting/socialmedialinks.json";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-content">
          <div className="details">
            <h2>ByteCode Learners</h2>
            <p>About Us</p>
            <p>
              BytecodeLearners Club under the Department of Computer Science and
              Engineering, <br /> Central University of Haryana, is an
              initiative to promote Project based learning .
            </p>
            <p id="initiator">
              <NavLink to="/initiator">INITIATOR</NavLink>
            </p>
          </div>
          <div className="contact">
            <h2>Contact Us</h2>
            <p>Email:{socialmedia[0].email}</p>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright © 2020 | Created by ByteCodeLearners.</p>
        <div className="footer-icons">
          <span>
            <a
              href="https://www.facebook.com/groups/bytecodelearners/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/BytecodeL"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/bytecode_learners/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/ByteCodeLearners/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

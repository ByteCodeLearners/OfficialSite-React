import React from "react";
import logo from "../byte-code-learners.svg";
import socialmedia from "../setting/socialmedialinks.json";
const Display = () => {
  return (
    <div className="display">
      <div className="text-icon">
        <div id="text">
          ByteCode <br /> Learners
        </div>
        <div className="icons">
          <ul>
            <li>
              <a
                href={socialmedia[0].facebook}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
            <li>
              <a href={socialmedia[0].twitter} target="_blank" rel="noreferrer">
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
            <li>
              <a
                href={socialmedia[0].instagram}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
            <li>
              <a href={socialmedia[0].github} target="_blank" rel="noreferrer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="imglogo">
        <img src={logo} alt="bytecode-learners-logo" />
        <p>Coding Community </p>
        <p>Create Something Ctrl+N</p>
      </div>
    </div>
  );
};

export default Display;

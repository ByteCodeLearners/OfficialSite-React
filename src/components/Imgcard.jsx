import React from "react";
import serverUrl from "../api/serverurl";

export default function Imgcard({ member }) {
  
  return (
    <div className="imgcard">
      <div className="img-container">
        <img
          src={`${serverUrl}/members/${member.photopath}`}
          alt={member.firstname}
        />
      </div>
      <div className="content-container">
        <p>{member.firstname + " " + member.lastname}</p>
        <div className="social-icon">
          {member.socialmedialinks ? (
            member.socialmedialinks.facebook ? (
              <a
                href={member.socialmedialinks.facebook}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            ) : null
          ) : null}
          {member.socialmedialinks ? (
            member.socialmedialinks.twitter ? (
              <a
                href={member.socialmedialinks.twitter}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
            ) : null
          ) : null}
          {member.socialmedialinks ? (
            member.socialmedialinks.instagram ? (
              <a
                href={member.socialmedialinks.instagram}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            ) : null
          ) : null}
          {member.socialmedialinks ? (
            member.socialmedialinks.github ? (
              <a
                href={member.socialmedialinks.github}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
            ) : null
          ) : null}
          {member.socialmedialinks ? (
            member.socialmedialinks.youtube ? (
              <a
                href={member.socialmedialinks.youtube}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}

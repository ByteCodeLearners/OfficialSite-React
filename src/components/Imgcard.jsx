import React from 'react';

export default function Imgcard(props){
  return(
    <div className="imgcard">
      <div className="img-container">
        <img src={props.member.img} alt={props.member.name} />
      </div>
      <div className="content-container">
        <p>{props.member.name}</p>
        <div className="social-icon">
          {props.member.fb?<a href={props.member.fb}><span><i className="fab fa-facebook-f"></i></span></a>:null}
          {props.member.twitter?<a href={props.member.twitter}><span><i className="fab fa-twitter"></i></span></a>:null}
          {props.member.insta?<a href={props.member.insta}><span><i className="fab fa-instagram"></i></span></a>:null}
          {props.member.github?<a href={props.member.github}><span><i className="fab fa-github"></i></span></a>:null}
        </div>
      </div>
    </div>
  );
}
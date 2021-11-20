import React from 'react';

export default function Imgcard({member}){
  return(
    <div className="imgcard">
      <div className="img-container">
        <img src={"https://www.bytecodelearners.club/bytecode-server/storage/app/public/"+member.user_details.image} alt={member.user_name} />
      </div>
      <div className="content-container">
        <p>{member.user_details.first_name +" "+ member.user_details.last_name}</p>
        <div className="social-icon">
          {member.fb?<a href={member.fb}><span><i className="fab fa-facebook-f"></i></span></a>:null}
          {member.twitter?<a href={member.twitter}><span><i className="fab fa-twitter"></i></span></a>:null}
          {member.insta?<a href={member.insta}><span><i className="fab fa-instagram"></i></span></a>:null}
          {member.github?<a href={member.github}><span><i className="fab fa-github"></i></span></a>:null}
        </div>
      </div>
    </div>
  );
}
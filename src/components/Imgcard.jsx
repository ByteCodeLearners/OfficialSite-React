import React from 'react';

export default function Imgcard({member}){
  return(
    <div className="imgcard">
      <div className="img-container">
        <img src={"https://www.bytecodelearners.tech/bytecode_server/storage/app/public/"+member.image} alt={member.first_name} />
      </div>
      <div className="content-container">
        <p>{member.first_name +" "+ member.last_name}</p>
        <div className="social-icon">
          {member.social_media_links?member.social_media_links.facebook?<a href={member.social_media_links.facebook}  rel="noreferrer" target="_blank"><span><i className="fab fa-facebook-f"></i></span></a>:null:null}
          {member.social_media_links?member.social_media_links.twitter?<a href={member.social_media_links.twitter}  rel="noreferrer" target="_blank"><span><i className="fab fa-twitter"></i></span></a>:null:null}
          {member.social_media_links?member.social_media_links.instagram?<a href={member.social_media_links.instagram}  rel="noreferrer" target="_blank"><span><i className="fab fa-instagram"></i></span></a>:null:null}
          {member.social_media_links?member.social_media_links.github?<a href={member.social_media_links.github}  rel="noreferrer" target="_blank"><span><i className="fab fa-github"></i></span></a>:null:null}
          {member.social_media_links?member.social_media_links.youtube?<a href={member.social_media_links.youtube}  rel="noreferrer" target="_blank"><span><i className="fab fa-youtube"></i></span></a>:null:null}
        </div>
      </div>
    </div>
  );
}
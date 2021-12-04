import React, { useState } from 'react';
import {
    FaGithub,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";

const MemberCard = ({ id, name, image, social }) => {
  const [isMore,setIsMore] = useState(true);
    const handleReadMore =(ths)=>{
      ths.target.innerHTML = isMore?"Read Less ⏫":"Read More ⏬";
      setIsMore(isMore?false:true);
      ths.target.previousSibling.classList.toggle('subtle');
    }
  return ( 
    <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-circle">
                      <ul className="icons">
                        
                          {social?social.twitter?<li><a target="_blank" rel="noreferrer" href={social.twitter}>
                            <FaTwitterSquare
                              className="icon"
                              color="#55adee"
                            />
                          </a></li>:null:null}
                        

                        
                          {social?social.github?<li className="github"><a target="_blank" rel="noreferrer" href={social.github}>
                            <FaGithub
                              className="icon"
                              color="black"
                            />
                          </a> </li>:null:null}
                       

                       
                          {social?social.linkedin? <li><a target="_blank" rel="noreferrer" href={social.linkedin}>
                            <FaLinkedin
                              className="icon"
                              color="#0077b5"
                            />
                          </a> </li>:null:null}
                       
                        

                          {social?social.instagram?<li><a target="_blank" rel="noreferrer" href={social.instagram}>
                            <FaInstagram
                              className="icon"
                              color="#8a3ab9"
                            />
                          </a> </li>:null:null}
                       
                      </ul>
                    </div>

                    <h2 className="card-title"> {name} </h2>
                  
                    <div onClick={(ths)=>{handleReadMore(ths)}} className="card-read">
                      Read More ⏬
                    </div>
                  </div>
                  <span>
                    <div className="imgcard">
                      <div className="img-container">
                        <img src={image} alt="images" className="card-media" />
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </>
   );
}
 


const BatchesCard = ({ batchData }) => {
    return ( 
        <div className="batches-card">
            <section className="main-card--cointainer">
        {batchData.length>0?batchData.map((curElem,index) => {


          return (
            <MemberCard 
            key={curElem.mobile_number} 
            social = {curElem.social_media_links}
            name={curElem.first_name+" "+curElem.last_name} 
            index={index} 
            image={curElem.batch!==2018?`https://www.bytecodelearners.tech/bytecode_server/storage/app/public/${curElem.image}`:curElem.image} 
           />
           
          );
        }):null}
      </section>
        </div>
     );
}
 
export default BatchesCard;



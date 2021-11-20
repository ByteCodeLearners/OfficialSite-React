import React, { useState } from 'react';
import {
    FaGithub,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare,
  } from "react-icons/fa";

const MemberCard = ({ id, name, image, description }) => {
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
                        <li>
                          <a href="#">
                            <FaTwitterSquare
                              className="icon"
                              color="CMYK"
                            //   size="0.55rem"
                            />
                          </a>
                        </li>

                        <li className="github">
                          <a href="#">
                            <FaGithub
                              className="icon"
                              color="black"
                            //   size="0.55rem"
                            />
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <FaLinkedin
                              className="icon"
                              color="#0e76a8"
                            //   size="0.55rem"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaInstagramSquare
                              className="icon"
                              color="#8a3ab9"
                            //   size="0.55rem"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h2 className="card-title"> {name} </h2>
                    <p className="card-description" >
                      {description}
                    </p>
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
        {batchData?batchData.map((curElem,index) => {
          const { id, name, category, image, description } = curElem;
          return (
            <MemberCard key={index} id={id} name={name} index={index} image={image} description={description}/>
            // <>
            //   <div className="card-container" key={id}>
            //     <div className="card">
            //       <div className="card-body">
            //         <div className="card-circle">
            //           <ul className="icons">
            //             <li>
            //               <a href="#">
            //                 <FaTwitterSquare
            //                   className="icon"
            //                   color="CMYK"
            //                 //   size="0.55rem"
            //                 />
            //               </a>
            //             </li>

            //             <li className="github">
            //               <a href="#">
            //                 <FaGithub
            //                   className="icon"
            //                   color="black"
            //                 //   size="0.55rem"
            //                 />
            //               </a>
            //             </li>

            //             <li>
            //               <a href="#">
            //                 <FaLinkedin
            //                   className="icon"
            //                   color="#0e76a8"
            //                 //   size="0.55rem"
            //                 />
            //               </a>
            //             </li>
            //             <li>
            //               <a href="#">
            //                 <FaInstagramSquare
            //                   className="icon"
            //                   color="#8a3ab9"
            //                 //   size="0.55rem"
            //                 />
            //               </a>
            //             </li>
            //           </ul>
            //         </div>

            //         <h2 className="card-title"> {name} </h2>
            //         <p className="card-description" id={index}>
            //           {description}
            //         </p>
            //         <div onClick={(ths)=>{handleReadMore(ths)}} className="card-read">
            //           Read More
            //         </div>
            //       </div>
            //       <span>
            //         <img src={image} alt="images" className="card-media" />
            //       </span>
            //     </div>
            //   </div>
            // </>
          );
        }):null}
      </section>
        </div>
     );
}
 
export default BatchesCard;
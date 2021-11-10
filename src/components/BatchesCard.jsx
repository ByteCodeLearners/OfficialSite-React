import React, { useState } from 'react';
import {
    FaGithub,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare,
  } from "react-icons/fa";

const BatchesCard = ({ batchData }) => {
    const [isMore,setIsMore] = useState(true);
    const handleReadMore =(ths)=>{
      setIsMore(isMore?false:true);
      ths.target.previousSibling.classList.toggle('subtle');
    }
    return ( 
        <div className="batches-card">
            <section className="main-card--cointainer">
        {batchData.map((curElem,index) => {
          const { id, name, category, image, description } = curElem;
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
                    <p className="card-description" id={index}>
                      {description}
                    </p>
                    <div onClick={(ths)=>{handleReadMore(ths)}} className="card-read">
                      Read {isMore?"More":"Less"}
                    </div>
                  </div>
                  <span>
                    <img src={image} alt="images" className="card-media" />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
        </div>
     );
}
 
export default BatchesCard;
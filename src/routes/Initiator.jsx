import "../styles/initiator.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {SiGmail} from "react-icons/si";

const Initiator = () => {
    return ( 
        <div className="initiator">
            <div className="main">
                <h1>FOUNDERS OF THE CLUB</h1>
                <div className="intro">
                    <div>
                        <h2><b> ByteCodeLearners Club</b> was founded in 2019 by 4 CSE students when
                        they were in their 2nd year of college.
                        <br /> The main motive to start such a community was that being from a
                        Computer Science background they were very much interested in coding and
                        development.<br/>In the beginning, when they started their development and coding
                        they found themselves confused at so many places and there was no such
                        community in their college to help them. They all decided to start a coding community for the coming freshers.</h2>
                    </div>
                        <h2>
                         So that they should not have to face all those difficulties and problems
                        again that their seniors faced.
                        <br /> They came up with a solution for their juniors known as
                        BYTECODELEARNERS.
                        <br /> The club was just started with 4 members from a classroom of the
                        CENTRAL UNIVERSITY OF HARYANA.</h2>
                </div>
                <div className="box">
                    <div className="box1">
                    <img alt="Initiator" src="http://bytecodelearners.club/initiators-image/dipu-kumar-sah.jpg" />
                    Dipu Kumar Sah<br/>
                    
                        <a href="https://github.com/dipu-kr-sah"><GoMarkGithub  style={{ fontSize: "100%", color: "black" ,margin:'7px'}}/></a>
                        <a href="mailto:dipuxah7@gmail.com"><SiGmail style={{fontSize:"100%", color:"#d5462e", margin:"7px"}}/></a>
                        <a href="https://www.linkedin.com/in/dipu-kumar-sah-07b308181/"><BsLinkedin style={{fontSize:"100%", color:"#0077b5", margin:"7px"}}/></a>

                    
                    </div>
                    <div className="box2">
                    
                    <img alt="Initiator" src="http://bytecodelearners.club/initiators-image/yash-raj.jpg" />
                    Yash Raj<br/>
                    <a href="https://github.com/180905"><GoMarkGithub  style={{ fontSize: "100%", color: "black" ,margin:'7px'}}/></a>
                    <a href="mailto:yash180905@gmail.com"><SiGmail style={{fontSize:"100%", color:"#d5462e", margin:"7px"}}/></a>
                    <a href="https://www.linkedin.com/in/yash-raj-3719111b2/"><BsLinkedin style={{fontSize:"100%", color:"#0077b5", margin:"7px"}}/></a>
                    </div>
                    <div className="box3">
                    <img alt="Initiator" src="http://bytecodelearners.club/initiators-image/raj-patel.jpg" />
                    Raj Patel<br/>
                    <a href="https://github.com/rajpatel2619"><GoMarkGithub  style={{ fontSize: "100%", color: "black" ,margin:'7px'}}/></a>
                    <a href="mailto:kakhilesh79@gmail.com"><SiGmail style={{fontSize:"100%", color:"#d5462e", margin:"7px"}}/></a>
                    <a href="https://www.linkedin.com/in/rajpatel2619/"><BsLinkedin style={{fontSize:"100%", color:"#0077b5", margin:"7px"}}/></a>
                    </div>
                    <div className="box4">
                    <img alt="Initiator" src="http://bytecodelearners.club/initiators-image/shantanu-pratap.jpg" />
                    Shantanu Pratap<br/>
                    <a href="https://github.com/180896-cse"><GoMarkGithub  style={{ fontSize: "100%", color: "black" ,margin:'7px'}}/></a>
                    <a href="mailto:shantanupratap180896@gmail.com"><SiGmail style={{fontSize:"100%", color:"#d5462e", margin:"7px"}}/></a>
                    <a href="https://www.linkedin.com/in/shantanu-p-291b991b4"><BsLinkedin style={{fontSize:"100%", color:"#0077b5", margin:"7px"}}/></a>
                    </div>
                </div>
                </div>
        </div>
     );
}
 
export default Initiator;
import React from 'react';
import logo from "../byte-code-learners.svg"
const Display = () => {
    return ( 
        <div className="display">
            <div className="text-icon">
                <div id="text">
                    ByteCode <br/> Learners
                </div>
                <div className="icons">
                    <ul>
                    <li>
                        <a href="https://www.facebook.com/groups/bytecodelearners/" target="_blank">
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/BytecodeL" target="_blank">
                        <span><i className="fab fa-twitter"></i></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bytecode_learners/" target="_blank">
                        <span><i className="fab fa-instagram"></i></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ByteCodeLearners/" target="_blank">
                        <span><i className="fab fa-github"></i></span>
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
                <img src={logo}/>
                <p>Coding Community </p>
                <p>Create Something Ctrl+N</p>
            </div>
        </div>
     );
}
 
export default Display;
import React, { useState } from "react";
// import "./App.css";
// import "../styles/registration_page.css";
import { useSpring, animated } from "react-spring";

function RegistrationPage() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", //Animate bottom border of register button
  });
  

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
        <strong>
          Login
          </strong>
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
        <strong>
          Register
          </strong>
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#">Forgot your password</a>
      </animated.div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username"><b>USERNAME</b></label>
      <input type="text" id="username" />
      <label for="password"><b>PASSWORD</b></label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
     
      <label for="fullname"> <b>First Name </b></label>
      <input type="text" id="First Name" />
      <label for="fullname"> <b>Middle Name </b></label>
      <input type="text" id="Middle Name" />
      <label for="fullname"> <b>Last Name </b></label>
      <input type="text" id="Last Name" />
      <label for="email"><b>email</b></label>
      <input type="text" id="email" />
      <label for="fullname"> <b>Mobile Number </b></label>
      <input type="Number" id="Middle Name" />
      <label for="fullname"> <b>Batch Session</b></label>
      <input type="text" id="Batch Session" />
      
      <label for="fullname"> <b>Linkedin Profile Link</b></label>
      <input type="url" id="Linkedin Profile Link" />
      <label for="fullname"> <b>Youtube Channel Link</b></label>
      <input type="url" id="Linkedin Profile Link" />
      <label for="fullname"> <b>Twitter Profile Link</b></label>
      <input type="url" id="Twitter Profile Link" />
      <label for="fullname"> <b>Facebook Profile Link</b></label>
      <input type="url" id="Facebook Profile Link" />
      <label for="fullname"> <b>Instagram Profile Link</b></label>
      <input type="url" id="Instagram Profile Link" />
      <label for="fullname"> <b>Github Profile Link</b></label>
      <input type="url" id="Github Profile Link" />
      <label for="password"><b>password</b></label>
      <input type="text" id="password" />
      <label for="password"><b>Confirm-password</b></label>
      <input type="text" id="password" />
      
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
    
  );
}

export default RegistrationPage;
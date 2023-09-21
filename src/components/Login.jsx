import React, { useState } from "react";

// import loginImage from "../assets/login-img.svg";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = () => {
    //condition for valid email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Please enter an email address");
    } else if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(""); // Reset error when user edits email
  };

  const validatePassword = () => {
    const minLength = 6;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    let error = "";
    //condition for valid password
    if (!password) {
      error = "Please enter a password.";
    } else if (password.length < minLength) {
      error = "Password must be at least 6 characters long.";
    } else if (!uppercaseRegex.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!lowercaseRegex.test(password)) {
      error = "Password must contain at least one lowercase letter.";
    } else if (!numberRegex.test(password)) {
      error = "Password must contain at least one number.";
    } else if (!specialCharRegex.test(password)) {
      error = "Password must contain at least one special character.";
    }

    setPasswordError(error);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(""); // Reset error when user edits password
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    //Onsubmit console email and password
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="login_img">
        {/* <img src={loginImage} alt="login_image" className="login_img_page" /> */}
      </div>
      <div className="login_part">
        <form onSubmit={handleSubmit}>
          <div className="cover">
            <h1>LogIn</h1>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}
            <button type="submit" className="login-btn">
              LOGIN
            </button>
            \
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

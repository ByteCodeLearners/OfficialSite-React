import React, { useState } from "react";

import logInImage from "../images/login-img.svg";
import "../styles/login.css";
import axios from "../api/axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    try {
      const response = await axios.post("user/login", formdata);
      const data = response?.data;
      if (data.message === "authorized") {
        swal("Success", "Logined successfully...", "success");
        localStorage.setItem("token", data.access_token);
        setEmail("");
        setPassword("");
        navigate("/dashboard/members");
      } else {
        swal("error", "Logined Failed...", "error");
        localStorage.removeItem("token");
      }
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error);
    }
  };

  return (
    <div className="Login_page_Ak">
      <div className="login_img_Ak">
        <img src={logInImage} alt="login_image" className="login_img_page" />
      </div>
      <div className="login_part_Ak">
        <form onSubmit={handleSubmit}>
          <div className="cover_Ak">
            <h1>LogIn</h1>
            <input
              className="input_Ak"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              className="input_Ak"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button type="submit" className="login-btn_Ak">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { sticky } from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";
import "../styles/registration_form.css";
const Registration = () => {
  useEffect(() => {
    sticky();
  }, []);
  return (
    <div className="registration">
      <RegistrationForm />
    </div>
  );
};

export default Registration;

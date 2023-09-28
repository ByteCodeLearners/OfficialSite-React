import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "./memberdash.css";
import axios from "../../api/axios";

const Mainsetting = () => {
  const token = localStorage.getItem("token");
  const [userdata, setUserdata] = useState(null);
  const getRegStatus = () => {
    axios
      .get(`user/checkreg`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserdata(res.data);
      })
      .catch((error) => {});
  };
  const changeRegistrationStatus = () => {
    const formdata = new FormData();
    formdata.append("email", userdata.email);
    formdata.append(
      "is_registration_open",
      userdata.is_registration_open === 1 ? false : true
    );
    axios
      .post(`user/setreg`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getRegStatus();
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getRegStatus();
  }, []);
  return (
    <>
      <div className="dashboard_setting">
        <div className="dashboard_setting_text">
          <p>BytecodeLearners Registration is open</p>
          {userdata != null ? (
            <button
              onClick={() => changeRegistrationStatus()}
              className={
                userdata.is_registration_open === 1
                  ? "green-button"
                  : "red-button"
              }
            >
              {userdata.is_registration_open === 1
                ? "Now Accepting"
                : "Not Accepting"}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Mainsetting;

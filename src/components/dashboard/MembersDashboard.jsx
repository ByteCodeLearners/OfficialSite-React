import React, { useState } from "react";
import "./memberdash.css";
import axios from "../../api/axios";
import { useEffect } from "react";

export const Membercard = (props) => {
  const token = localStorage.getItem("token");
  const changeActiveStatus = (props) => {
    const formdata = new FormData();
    formdata.append("id", props.id);
    formdata.append("isactive", status);
    axios
      .post(`member/setactive`, formdata, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        props.getMemberData();
      })
      .catch((error) => {});
  };
  const buttonClass =
    props.value.isactive === 0 ? "red-button" : "green-button";
  const buttonText = props.value.isactive === 0 ? "Inactive" : "Active";
  const status = props.value.isactive === 1 ? false : true;
  return (
    <div className="member_dash">
      <p>
        {props.value.firstname}
        <span> </span>
        {props.value.lastname}
      </p>
      <p>{props.value.batch}</p>
      <p>{props.value.email}</p>
      <button
        className={buttonClass}
        onClick={() => {
          changeActiveStatus({
            id: props.value.id,
            activestatus: status,
            getMemberData: props.getMemberData,
          });
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

const MembersDashboard = () => {
  const [member, setMember] = useState(null);
  const token = localStorage.getItem("token");
  const getMemberData = () => {
    axios
      .get(`member/getall`, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMember(res.data?.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMemberData();
  }, []);

  return (
    <div className="members-dashboard">
      {member != null ? (
        member.map((value, key) => {
          return (
            <Membercard value={value} key={key} getMemberData={getMemberData} />
          );
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default MembersDashboard;

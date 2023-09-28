import React, { useState } from "react";
import "./memberdash.css";
import axios from "../../api/axios";
import { useEffect } from "react";
import swal from "sweetalert";
import DeleteIcon from "@mui/icons-material/Delete";
import serverUrl from "../../api/serverurl";

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
        props.getMemberData();
      })
      .catch((error) => {});
  };

  const deleteMember = (props) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete the member information",
      icon: "warning",
      dangerMode: true,
      buttons: ["cancle", "ok"],
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`member/delete/${props.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            if (res?.data?.message === "Member Deleted") {
              swal("Deleted!", "Member deleted", "success");
              props.getMemberData();
            } else {
              swal("Error", "Error while deleting", "error");
            }
          })
          .catch((error) => {});
      }
    });
  };

  const buttonClass =
    props.value.isactive === 0 ? "red-button" : "green-button";
  const buttonText = props.value.isactive === 0 ? "Inactive" : "Active";
  const status = props.value.isactive === 1 ? false : true;
  return (
    <div className="member_dash">
      <img
        src={`${serverUrl}/members/${props.value.photopath}`}
        alt={props.value.photopath}
        className="image_member_dash"
      />
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
      <button
        className="red-button"
        onClick={() => {
          deleteMember({
            id: props.value.id,
            getMemberData: props.getMemberData,
          });
        }}
      >
        <DeleteIcon />
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
      <div className="member_dash">
        <p>Profile</p>
        <p>Name</p>
        <p>Batch</p>
        <p>Email</p>
        <p>active</p>
        <div className="red-button">
          <DeleteIcon />
        </div>
      </div>
      {member != null ? (
        member.map((value, key) => {
          return (
            <>
              <Membercard
                value={value}
                key={key}
                getMemberData={getMemberData}
              />
            </>
          );
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default MembersDashboard;

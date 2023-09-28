import React from "react";
import "./dashboard.css";
import serverUrl from "../../api/serverurl";
import axios from "../../api/axios";
import swal from "sweetalert";

const Imagecard = (props) => {
  const token = localStorage.getItem("token");
  const deleteImage = (id) => {
    axios
      .delete(`gallery/delete/${id}`, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        swal("success", "Deleted", "success");
        props.getData();
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="main_card_event">
        <img
          src={`${serverUrl}/eventgallery/${props.value.image_path}`}
          alt={props.value.image_path}
          height="200"
          width="300px"
        />
        <div className="image_name">
          <p>{props.value.image_path}</p>
          <button onClick={() => deleteImage(props.value.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              alt="button"
              height="40"
              width="40"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;

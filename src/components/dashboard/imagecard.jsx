import React from "react";
import "./dashboard.css";
import serverUrl from "../../api/serverurl";
import axios from "../../api/axios";

const Imagecard = (props) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE2OTUxODU0NTcsImV4cCI6MTY5NTE4OTA1NywibmJmIjoxNjk1MTg1NDU3LCJqdGkiOiJoNFk2VVdhWW51VjMxeXBUIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.QCaYkn89dDsf8b9kSGlEwIXaJguT35gFOF6q_EL9TO0";

  const deleteImage = (id) => {
    axios
      .delete(`gallery/delete/${id}`, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
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

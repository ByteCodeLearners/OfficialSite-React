import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import "./dashboard.css";
import { useEffect } from "react";
import serverUrl from "../../api/serverurl";
import swal from "sweetalert";

const PrevCard = (props) => {
  const token = localStorage.getItem("token");
  const deleteImage = (id) => {
    axios
      .delete(`prevevent/delete/${id}`, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        props.getPrevEvtData();
        swal("success", "Deleted", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="main_card_event">
        <img
          src={`${serverUrl}/prevevent/${props.value.image_path}`}
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

const PrevGalleryDashboard = (props) => {
  return (
    <div className="main_gallery_container">
      {props.data != null ? (
        props.data.map((value, key) => {
          return (
            <PrevCard
              value={value}
              key={key}
              getPrevEvtData={props.getPrevEvtData}
            ></PrevCard>
          );
        })
      ) : (
        <p>No Previous event add Atleast one</p>
      )}
    </div>
  );
};

const PrevEvent = () => {
  const [evtname, setEvtname] = useState({ name: "" });
  const [image, setImage] = useState();
  const [predata, setPrevdata] = useState();
  const ontextChange = (e) => {
    const { name, value } = e.target;
    setEvtname({ ...evtname, [name]: value });
  };
  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const getPrevEvtData = () => {
    axios
      .get(`prevevent/get`)
      .then((res) => {
        setPrevdata(res.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPrevEvtData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", evtname.name);
    formdata.append("image", image);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("prevevent/add", formdata, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response?.data;
      if (data.message != null) {
        setEvtname({ name: "" });
        document.getElementById("prev_evt_d").reset();
        getPrevEvtData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="members-dashboard">
        <div className="add_container">
          <form className="add_event_image_form" id="prev_evt_d">
            <div className="input_part">
              <label htmlFor="name">Event Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={ontextChange}
                value={evtname.name}
              />
            </div>
            <div className="input_part">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="Image"
                id="image"
                onChange={onImageChange}
              />
            </div>
            <button onClick={handleSubmit}>submit</button>
          </form>
        </div>
        <PrevGalleryDashboard data={predata} getPrevEvtData={getPrevEvtData} />
      </div>
    </>
  );
};

export default PrevEvent;

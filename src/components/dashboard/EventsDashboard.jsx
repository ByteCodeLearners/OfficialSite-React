import { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "../../api/axios";
import serverUrl from "../../api/serverurl";

const Eventdisplay = (props) => {
  const token = props.token;
  const deletePoster = (id) => {
    axios
      .delete(`event/delete/${id}`, {
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
          src={`${serverUrl}/eventposters/${props.value.posterpath}`}
          alt={props.value.image_path}
          height="200"
          width="300px"
        />
        <div className="image_name">
          <p>{props.value.title}</p>
          <button onClick={() => deletePoster(props.value.id)}>
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

const EventsDashboard = () => {
  const [evtdetail, setEvtDetail] = useState(null);
  const initialvalues = { title: "", description: "", venue: "", date: "" };
  const [poster, setPoster] = useState();
  const [evtdata, setEvtdata] = useState({ ...initialvalues });
  const onchangeData = (e) => {
    const { name, value } = e.target;
    setEvtdata({ ...evtdata, [name]: value });
  };
  const onPosterChange = (e) => {
    const file = e.target.files[0];
    setPoster(file);
  };
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE2OTUxOTE5MjYsImV4cCI6MTY5NTE5NTUyNiwibmJmIjoxNjk1MTkxOTI2LCJqdGkiOiJ3bVI2N3A4VEdNbHhxMVg4Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.TfbfXS4aU5Qje3cVWW2GCL3s1mdHdAAU_KZcAbN2kaU";
  const getData = () => {
    axios
      .get(`event/getall`, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEvtDetail(res.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    for (let value in evtdata) {
      formdata.append(value, evtdata[value]);
    }
    formdata.append("poster", poster);
    try {
      const response = await axios.post("event/add", formdata, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response?.data;
      console.log(data);
      if (data.message != null) {
        setEvtdata({ ...initialvalues });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="members-dashboard">
      <div className="event_add_container">
        <form className="add_event_info_form">
          <div className="input_part">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={onchangeData}
              value={evtdata.title}
            />
          </div>
          <div className="input_part">
            <label htmlFor="desc">Description: </label>
            <textarea
              name="description"
              id="desc"
              rows="4"
              cols="50"
              onChange={onchangeData}
              value={evtdata.description}
            />
          </div>
          <div className="input_part">
            <label htmlFor="venue">Venue: </label>
            <input
              type="text"
              name="venue"
              id="venue"
              onChange={onchangeData}
              value={evtdata.venue}
            />
          </div>

          <div className="input_part">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={onchangeData}
              value={evtdata.date}
            />
          </div>
          <div className="input_part">
            <label htmlFor="poster">Poster:</label>
            <input
              type="file"
              name="poster"
              id="poster"
              onChange={onPosterChange}
            />
          </div>
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
      <div className="main_gallery_container">
        {evtdetail != null ? (
          evtdetail.map((value, key) => {
            return (
              <Eventdisplay
                value={value}
                key={key}
                token={token}
                getData={getData}
              ></Eventdisplay>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default EventsDashboard;

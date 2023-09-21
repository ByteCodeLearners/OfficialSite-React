import { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "../../api/axios";
import ImageGalleryDashboard from "./ImageGalleryDashboard";

const GalleryDashboard = () => {
  const [imgdata, setImgdata] = useState(null);
  const [evtimagedata, setEvtimagedata] = useState({ date: "" });
  const [image, setImage] = useState();
  const ontextChange = (e) => {
    const { name, value } = e.target;
    setEvtimagedata({ ...evtimagedata, [name]: value });
  };
  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const getData = () => {
    axios
      .get(`gallery/get`)
      .then((res) => {
        setImgdata(res.data?.data);
        console.log(res.data?.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("date", evtimagedata.date);
    formdata.append("image", image);

    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW4iLCJpYXQiOjE2OTUxOTE5MjYsImV4cCI6MTY5NTE5NTUyNiwibmJmIjoxNjk1MTkxOTI2LCJqdGkiOiJ3bVI2N3A4VEdNbHhxMVg4Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.TfbfXS4aU5Qje3cVWW2GCL3s1mdHdAAU_KZcAbN2kaU";
    try {
      const response = await axios.post("gallery/add", formdata, {
        headers: {
          "cotent-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response?.data;
      if (data.message != null) {
        setEvtimagedata({ date: "" });
      }
      getData();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="members-dashboard">
      <div className="add_container">
        <form className="add_event_image_form">
          <div className="input_part">
            <label htmlFor="date">Event date: </label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={ontextChange}
              value={evtimagedata.date}
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
      <ImageGalleryDashboard data={imgdata} getData={getData} />
    </div>
  );
};

export default GalleryDashboard;

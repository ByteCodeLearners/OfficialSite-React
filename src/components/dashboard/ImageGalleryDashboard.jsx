import React from "react";
import "./dashboard.css";
import Imagecard from "./imagecard";

const ImageGalleryDashboard = (props) => {
  return (
    <div className="main_gallery_container">
      {props.data != null ? (
        props.data.map((value, key) => {
          return (
            <Imagecard
              value={value}
              key={key}
              getData={props.getData}
            ></Imagecard>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ImageGalleryDashboard;

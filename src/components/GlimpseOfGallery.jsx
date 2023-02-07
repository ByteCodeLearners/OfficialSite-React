import React from "react";
import "../styles/glimpse-of-gallery.css";
import { Link } from "react-router-dom";
import { useInfoContextProvider } from "../context/InfoContextProvider";

const GlimpseOfGallery = () => {
  const info = useInfoContextProvider();

  const images = [
    `${info.server}/statics/event2022_pic10.jpg`,
    `${info.server}/statics/event2022_pic2.jpeg`,
    `${info.server}/statics/event2022_pic1.jpeg`,
    `${info.server}/statics/event2022_pic4.jpeg`,
    `${info.server}/statics/event2022_pic6.jpeg`,
    `${info.server}/statics/prevEvent5.jpg`,
  ];
  return (
    <div className="glimpse-of-gallery">
      <h1>Glimpse Of Gallery</h1>
      <div className="images">
        {images.map((img, index) => {
          return <img className="gallery-img" key={index} src={img} alt="" />;
        })}
      </div>
      <Link
        to={"/events-gallery"}
        style={{ textDecoration: "none" }}
        className="view-more-btn"
      >
        View More
      </Link>
    </div>
  );
};

export default GlimpseOfGallery;

import React from "react";
import "../styles/glimpse-of-gallery.css";
import { Link } from "react-router-dom";

const GlimpseOfGallery = () => {
  const images = [
    "https://www.bytecodelearners.tech/statics/event2022_pic10.jpg",
    "https://www.bytecodelearners.tech/statics/event2022_pic2.jpeg",
    "https://www.bytecodelearners.tech/statics/event2022_pic1.jpeg",
    "https://www.bytecodelearners.tech/statics/event2022_pic4.jpeg",
    "https://www.bytecodelearners.tech/statics/event2022_pic6.jpeg",
    "https://www.bytecodelearners.tech/statics/prevEvent5.jpg",
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

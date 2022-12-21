import React from "react";
import "../styles/glimpse-of-gallery.css";
import { Link } from "react-router-dom";

const GlimpseOfGallery = () => {
  const images = [
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic10.jpg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic2.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic1.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic4.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/event2022_pic6.jpeg",
    "http://bytecodelearners.cuh.ac.in/statics/prevEvent5.jpg",
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

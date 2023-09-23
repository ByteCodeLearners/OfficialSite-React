import React, { useEffect, useState } from "react";
import "../styles/glimpse-of-gallery.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import serverUrl from "../api/serverurl";

const GlimpseOfGallery = () => {
  const [glimpsgallery, setGlimpsgallery] = useState(null);

  const getGlimpseOfGalleryImages = async () => {
    try {
      const response = await axios.get("gallery/get");
      const data = response?.data?.data;
      const glimpsdata = data.slice(0, 6);
      setGlimpsgallery(glimpsdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGlimpseOfGalleryImages();
  }, []);

  return (
    <div className="glimpse-of-gallery">
      <h1>Glimpse Of Gallery</h1>
      <div className="images">
        {glimpsgallery != null ? (
          glimpsgallery.map((img, index) => {
            return (
              <img
                className="gallery-img"
                key={index}
                src={`${serverUrl}/eventgallery/${img.image_path}`}
                alt=""
              />
            );
          })
        ) : (
          <></>
        )}
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

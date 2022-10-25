import React, { useEffect } from "react";
import { sticky } from "../components/Navbar";
import "../styles/events-gallery.css";
import Gallery from "../components/Gallery.jsx";

const EventsGallery = () => {
  useEffect(() => {
    sticky();
    document.querySelector(".events-gallery").scrollIntoView();
  }, []);
  return (
    <div className="events-gallery">
      <Gallery />
    </div>
  );
};

export default EventsGallery;

import React from "react";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Anime from "./components/anime";
import ImageEffect from "./components/ImageEffect";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import AboutUs from "./components/AboutUs";
import "./styles/navbar.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Display />
      <AboutUs />
      {/* <Anime /> */}
      {/* <ImageEffect /> */}
      <Footer />
    </div>
  );
}

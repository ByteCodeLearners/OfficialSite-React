import React from "react";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import "./styles/navbar.css";
import Section2 from "./components/Section2";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Display />
      <Section2 />
      <Footer />
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import "./styles/navbar.css";
import ImageEffect from "./components/ImageEffect";
import ContactUs from "./routes/ContactUs";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events-gallery">
            <ImageEffect />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

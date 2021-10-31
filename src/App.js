import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import "./styles/navbar.css";
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
            <div style={{ marginTop: "150px" }}>Events Gallery</div>
          </Route>
          <Route exact path="/batches">
            <div style={{ marginTop: "150px" }}>Event batches</div>
          </Route>
          <Route exact path="/registration">
            <div style={{ marginTop: "150px" }}>Registration Page</div>
          </Route>
          <Route exact path="/initiator">
            <div style={{ marginTop: "150px" }}>Initiators Page</div>
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

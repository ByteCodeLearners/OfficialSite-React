import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import "./styles/navbar.css";
import ContactUs from "./routes/ContactUs";
import Registration from "./routes/Registration";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/react_bcl">
            <Home />
          </Route>
          <Route exact path="/react_bcl/events-gallery">
            <div style={{ marginTop: "150px" }}>Events Gallery</div>
          </Route>
          <Route exact path="/react_bcl/batches">
            <div style={{ marginTop: "150px" }}>Batches</div>
          </Route>
          <Route exact path="/react_bcl/registration">
            <Registration />
          </Route>
          <Route exact path="/react_bcl/initiator">
            <div style={{ marginTop: "150px" }}>Initiators Page</div>
          </Route>
          <Route exact path="/react_bcl/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

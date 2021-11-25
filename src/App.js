import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import "./styles/navbar.css";
import ContactUs from "./routes/ContactUs";
import Registration from "./routes/Registration";
import Batches from "./routes/Batches";
import EventsGallery from "./routes/EventsGallery";
import Initiator from "./routes/Initiator";

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
            <EventsGallery />
          </Route>
          <Route exact path="/react_bcl/batches">
            <Batches />
          </Route>
          <Route exact path="/react_bcl/registration">
            <Registration />
          </Route>
          <Route exact path="/react_bcl/initiator">
            {/* <div style={{ marginTop: "150px", marginBottom: "50vh" }}>
              Initiators Page
            </div> */}
            <Initiator />
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

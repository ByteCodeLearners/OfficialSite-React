import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
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
import UpdateEventDetails from "./routes/UpdateEventDetails";

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
            <EventsGallery />
          </Route>
          <Route exact path="/batches">
            <Batches />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/initiator">
            <Initiator />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/add/upcoming/events">
            <UpdateEventDetails />
          </Route>
          <Route path="*">
            <div
              style={{
                marginTop: "150px",
                marginBottom: "50vh",
                fontSize: "0.2em",
                textAlign: "center",
              }}
            >
              <h1>
                Error 404 <p> Page not found</p>
              </h1>
              <p>{<NavLink to="/">Go to Home</NavLink>}</p>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

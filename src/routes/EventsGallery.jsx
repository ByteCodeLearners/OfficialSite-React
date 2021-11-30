import React, { useEffect } from 'react';
import { sticky } from '../components/Navbar';
import "../styles/events-gallery.css"
const EventsGallery = () => {
    useEffect(()=>{
        sticky();
    },[])
    return ( 
        <div className="events-gallery">
            <div className="title">EVENTS GALLERY</div>
            <div className="subtitle">
                SOME OF THE MOMENTS WE <br />
                CAPTURE....
            </div>
            <div className="gallery">
                <div className="portion1">
                    <img id="event1" src={require("../images/cod.jpg").default} alt="events" />
                    <img id="event2" src={require("../images/learn.jpg").default} alt="events" />
                    <img id="event3" src={require("../images/code.jpg").default} alt="events" />
                    <img id="event4" src={require("../images/com.jpg").default} alt="events" />
                </div>
                <div className="portion2">
                    <img id="event5" src={require("../images/learn.jpg").default} alt="events" />
                    <img id="event6" src={require("../images/code.jpg").default} alt="events" />
                    <img id="event7" src={require("../images/cod.jpg").default} alt="events" />
                    <img id="event8" src={require("../images/com.jpg").default} alt="events" />
                </div>
            </div>
        </div>
     );
}
 
export default EventsGallery;
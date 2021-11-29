import React, { useEffect, useState } from 'react';
import AboutUs from './AboutUs';
import UpEvents from './UpEvents';
import api from '../backend.js';
const Section2 = () => {
    const [eventDetails, setEventDetails] = useState();
    const getEvent = async()=>{
        const event = await api.get('/api/getevents');
        // console.log(event.data);
        setEventDetails(event.data);
    }
    useEffect(()=>{
        getEvent();
    },[])
    return ( 
        <div className="section2">
            <div className='abt-event'>
                <AboutUs/>
                <UpEvents eventDetails={eventDetails}/>
            </div>
            <div className="event-img">
            <img src={eventDetails?`https://www.bytecodelearners.club/bytecode-server/storage/app/${eventDetails.image}`:null} alt="Event Poster"/>  
            </div>
        </div>
     );
}
 
export default Section2;
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
                <AboutUs/>
                <UpEvents eventDetails={eventDetails}/>
        </div>
     );
}
 
export default Section2;
import React from 'react';
export default function UpEvents({eventDetails}){
  // let [event_topic,setTopic] = useState("");
  // let [event_link,setLink] = useState("");
  // let [event_time,setTime] = useState("");
  // let toggle =()=>{
  //   let detail = document.querySelector('.event-details');
  //   detail.classList.toggle("details-active");
  //   let events = document.querySelector('.up-events-content');
  //   events.classList.toggle("blur");
  // }
  // let asignDetails=(event)=>{
  //   setTopic(event.title);
  //   setLink(event.link);
  //   setTime(event.time);
  // }
  return(
    <div className="up-events">
      <div className="up-events-content">
        <h2>UpComing Event</h2>
        <p><b>Topic: </b>{eventDetails?eventDetails.topic:null}</p>
        <p><b>Link: </b><a href={eventDetails?eventDetails.link_details:null}>{eventDetails?eventDetails.link_details:null}</a></p>
        <p><b>Details: </b>{eventDetails?eventDetails.note:null}</p>
        {/* <div className="events-list">
            <ul>
                {upComingEvents.map((event,index)=>{return <li onClick={()=>{asignDetails(event);toggle();}}  key={index}>{event.title}</li>})}
            </ul>
        </div> */}
      </div>
      {/* <div className="event-details">
        <i className="fas fa-times" onClick={toggle}></i>
        <h3>Event details</h3>
        <p> <b>Topic:</b> {event_topic}</p>
        <p> <b>Link:</b> <a target="_blank" rel="noreferrer" href={`https://meet.google.com/${event_link}` }>Click here to join.</a> </p>
        <p> <b>Time:</b> {event_time}</p>
      </div> */}
    </div>
  );
}
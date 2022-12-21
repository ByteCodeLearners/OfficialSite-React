import React from "react";
const preEventImgs = [
  "http://bytecodelearners.cuh.ac.in/statics/prevEvent3.jpg",
  "http://bytecodelearners.cuh.ac.in/statics/prevEvent5.jpg",
  "http://bytecodelearners.cuh.ac.in/statics/prevEvent1.jpg",
  "http://bytecodelearners.cuh.ac.in/statics/event2022_pic1.jpeg",
];
const preEventImgs1 = [
  "http://bytecodelearners.cuh.ac.in/statics/prevEvent4.jpg",
  "http://bytecodelearners.cuh.ac.in/statics/event2022_pic3.jpeg",
];
export default function UpEvents({ eventDetails }) {
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
  return (
    <div className="up-events">
      <h1>Events</h1>
      <div className="both-events">
        <div className="up-events-content">
          <h2>UpComing Event</h2>
          <div className="event-img">
            <img
              src={
                eventDetails
                  ? `http://bytecodelearners.cuh.ac.in/bytecode-server/storage/app/${eventDetails.image}`
                  : null
              }
              alt="Event Poster"
            />
          </div>
          <div className="up-details">
            <p>
              <b>Topic: </b>
              {eventDetails ? eventDetails.topic : null}
            </p>
            <p>
              <b>Venue: </b>
              <a href={eventDetails ? eventDetails.link_details : null}>
                {eventDetails ? eventDetails.link_details : null}
              </a>
            </p>
            <p>
              <b>Details: </b>
              {eventDetails ? eventDetails.note : null}
            </p>
          </div>
        </div>
        <div className="pre-events">
          <h2>Previous Events</h2>
          <div className="pre-event-imgs">
            {preEventImgs1.map((img, idx) => {
              return <img key={idx} src={img} alt={img} />;
            })}
            <div className="pre-img1">
              {preEventImgs.map((img, idx) => {
                return <img key={idx} src={img} alt={img} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

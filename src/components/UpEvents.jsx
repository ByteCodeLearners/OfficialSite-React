import React from "react";
import { useInfoContextProvider } from "../context/InfoContextProvider";

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

  // const info = useContext(InfoContext);
  const info = useInfoContextProvider();
  const preEventImgs = [
    `${info.server}/statics/prevEvent3.jpg`,
    `${info.server}/statics/prevEvent5.jpg`,
    `${info.server}/statics/prevEvent1.jpg`,
    `${info.server}/statics/event2022_pic1.jpeg`,
  ];
  const preEventImgs1 = [
    `${info.server}/statics/prevEvent4.jpg`,
    `${info.server}/statics/event2022_pic3.jpeg`,
  ];

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
                  ? `${info.server}/bytecode-server/storage/app/${eventDetails.image}`
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

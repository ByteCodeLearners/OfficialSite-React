import React, { useEffect, useState } from "react";
import { useInfoContextProvider } from "../context/InfoContextProvider";
import axios from "../api/axios";
import serverUrl from "../api/serverurl";

export default function UpEvents() {
  const [eventDetails, setEventDetails] = useState();
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

  const getLatestEvent = (id) => {
    axios
      .get(`event/getlatest`)
      .then((res) => {
        setEventDetails(res?.data?.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getLatestEvent();
  }, []);

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
                  ? `${serverUrl}/eventposters/${eventDetails.posterpath}`
                  : null
              }
              alt="Event Poster"
            />
          </div>
          <div className="up-details">
            <p>
              <b>Topic: </b>
              {eventDetails ? eventDetails.title : null}
            </p>
            <p>
              <b>Venue: </b>
              {eventDetails ? eventDetails.venue : null}
            </p>
            <p>
              <b>Details: </b>
              {eventDetails ? eventDetails.description : null}
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

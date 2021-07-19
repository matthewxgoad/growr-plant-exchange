import EventCard from "../../components/EventCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import API from "../../util/API/API";
import { useState, useEffect } from "react";
import "./Events.css";

export default function Events(props) {
  const [eventDataState, setEventDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadEvents();
  }, []);

  // Loads all trades near userid
  function loadEvents() {
    API.getEvents(userId)
      .then((res) => {
        let eventArr = [];

        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res.data[i].events.length; j++) {
            let eventLoop = res.data[i].events[j];
            console.log(eventLoop);
            if (eventLoop) {
              eventLoop.name = res.data[i].name;
              eventArr.push(eventLoop);
            }
          }
        }
        setEventDataState(eventArr);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="events" />
      <Gallery>
        {eventDataState.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </Gallery>
    </>
  );
}

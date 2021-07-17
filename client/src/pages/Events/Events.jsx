import EventCard from "../../components/EventCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import API from "../../util/API";
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
    .then( (res) => {
      console.log(res)
      setEventDataState(res.data[0].events)
    })
    .catch((err) => console.log(err));
}

  return (
    <>
      <NavBar page="events" />
      <Gallery>
        {eventDataState.map((event) => {
          return <EventCard event={event} />;
        })}
      </Gallery>
    </>
  );
}

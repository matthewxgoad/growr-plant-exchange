import EventCard from "../../components/EventCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import API from "../../util/API/API";
import { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import "./Events.css";

const growrGreen = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  distance: {
    color: growrGreen,
  }
}));

export default function Events(props) {

  const classes = useStyles();

  const [eventDataState, setEventDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all trades near userid
  function loadEvents() {
    API.getEvents(userId)
      .then((res) => {
        let eventArr = [];

        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res.data[i].events.length; j++) {
            let eventLoop = res.data[i].events[j];
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
      <Box align="center">
      <Typography variant="caption" className={classes.distance}>showing events within 15 miles</Typography>
      </Box>
      <Gallery>
        {eventDataState.map((event, index) => {
          return <EventCard key={index} event={event} loadEvents={loadEvents} />;
        })}
      </Gallery>
    </>
  );
}

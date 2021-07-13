import EventCard from '../../components/EventCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import eventData from '../../eventData';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import "./Events.css"

export default function Events() {
  const [ eventDataState, setEventDataState ] = useState(eventData);
  
  return (
    <>
      <NavBar />
      <Gallery>
      {eventDataState.map(event => {
        return (

          <EventCard event={event}/>
          
        )
      })}
      </Gallery>
    </>
  );
}

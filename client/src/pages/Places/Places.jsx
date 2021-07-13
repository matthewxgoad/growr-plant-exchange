import PlaceCard from '../../components/PlaceCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import placesData from '../../placesData';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import "./Places.css"

export default function Places() {
  const [ placeDataState, setPlaceDataState ] = useState(placesData);
  
  return (
    <>
      <NavBar />
      <Gallery>
      {placeDataState.map(place => {
        return (

            <PlaceCard place={place}/>
          
        )
      })}
      </Gallery>
    </>
  );
}

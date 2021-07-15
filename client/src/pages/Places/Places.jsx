import PlaceCard from '../../components/PlaceCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import placesData from '../../placesData';
import { useState } from 'react';
import "./Places.css"

export default function Places(props) {
  const [ placeDataState, setPlaceDataState ] = useState(placesData);
  
  return (
    <>
      <NavBar page="places"/>
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

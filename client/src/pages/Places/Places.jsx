import PlaceCard from "../../components/PlaceCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import { useState, useEffect } from "react";
import API from "../../util/API";
import "./Places.css";

export default function Places(props) {
  const [placeDataState, setPlaceDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadPlaces();
  }, []);

  // Loads all trades near userid
  function loadPlaces() {
    API.getPlaces(userId)
      .then( (res) => {
        console.log(res)
        setPlaceDataState(res.data[0].places)
      })
      .catch((err) => console.log(err));
  }


  return (
    <>
      <NavBar page="places" />
      <Gallery>
        {placeDataState.map((place) => {
          return <PlaceCard place={place} />;
        })}
      </Gallery>
    </>
  );
}

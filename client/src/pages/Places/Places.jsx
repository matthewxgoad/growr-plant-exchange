import PlaceCard from "../../components/PlaceCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import API from "../../util/API/API";
import "./Places.css";

const growrGreen = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  distance: {
    color: growrGreen,
  },
}));

export default function Places(props) {
  const classes = useStyles();
  const [placeDataState, setPlaceDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadPlaces();
  }, []);

  // Loads all trades near userid
  function loadPlaces() {
    API.getPlaces(userId)
      .then((res) => {
        let placeArr = [];

        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res.data[i].places.length; j++) {
            let placeLoop = res.data[i].places[j];
            console.log(placeLoop);
            if (placeLoop) {
              placeLoop.name = res.data[i].name;
              placeArr.push(placeLoop);
            }
          }
        }
        setPlaceDataState(placeArr);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="places" />
      <Box align="center">
      <Typography variant="caption" className={classes.distance}>showing places within 15 miles</Typography>
      </Box>
      <Gallery>
        {placeDataState.map((place, index) => {
          return <PlaceCard key={index} place={place} loadPlaces={loadPlaces} />;
        })}
      </Gallery>
    </>
  );
}

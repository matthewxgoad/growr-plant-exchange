import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import TradeCard from "../../components/TradeCard";
import API from "../../util/API";
import { Grid } from "@material-ui/core";
import "./Profile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "2rem",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  const [tradeDataState, setTradeDataState] = useState([]);
  const [profileDataState, setProfileDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadProfile();
  }, []);

  // Loads all trades near userid
  function loadProfile() {
    API.getUser(userId)
      .then((res) => {
        setProfileDataState(res.data.user);
        setTradeDataState(res.data.user.trades);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="profile" />

      <Grid container className={classes.root}>
        <Gallery>
          <ProfileCard profile={profileDataState} />

          {tradeDataState.map((trade, index) => {
            return <TradeCard trade={trade} key={index} />;
          })}
        </Gallery>
      </Grid>
    </>
  );
}

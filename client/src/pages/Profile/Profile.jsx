import {React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Gallery from "../../components/Gallery";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import TradeCard from "../../components/TradeCard";
import API from "../../util/API/API";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  const [tradeDataState, setTradeDataState] = useState([]);
  const [profileDataState, setProfileDataState] = useState([]);

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  let location = useLocation()

  useEffect(() => {
    let otherUserId = location.pathname.split('/')[2]

    if(otherUserId){
      loadProfile(otherUserId)
    } else {
      loadProfile(userId)
    }
  }, [userId, location.pathname]);

  // Loads all trades near userid
  function loadProfile(id) {
    API.getUser(id)
      .then((res) => {
        setProfileDataState(res.data.user);

        let tradeArr = [];

        for(let i = 0; i < res.data.user.trades.length; i++){
            let tradeLoop = res.data.user.trades[i];
            if(tradeLoop){
              tradeLoop.name = res.data.user.name;
              tradeArr.push(tradeLoop)
            }
          }
        setTradeDataState(tradeArr)

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

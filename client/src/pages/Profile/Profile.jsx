import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Gallery from "../../components/Gallery";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import TradeCard from "../../components/TradeCard";
import tradeData from "../../tradeData";
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

  const [tradeDataState, setTradeDataState] = useState(tradeData);

  return (
    <>
      <NavBar page="profile"/>

      <Grid container className={classes.root}>
        
          <Gallery>
          <ProfileCard />
            {tradeDataState.map((trade) => {
              return <TradeCard trade={trade} />;
            })}
          </Gallery>
        
      </Grid>
    </>
  );
}

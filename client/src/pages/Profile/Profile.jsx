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
    margin: '2rem',
  },

}));

export default function Profile() {

  const classes = useStyles();


  const [tradeDataState, setTradeDataState] = useState(tradeData);

  return (
    <>
      <NavBar />
      <Grid container className={classes.root}>
        <Grid item xs>
          <ProfileCard />
        </Grid>
        <Grid item xs={8}>
          <Gallery>
            {tradeDataState.map((trade) => {
              return (
                <Grid item xs={5}>
                  <TradeCard trade={trade} />
                </Grid>
              );
            })}
          </Gallery>
        </Grid>
      </Grid>
    </>
  );
}

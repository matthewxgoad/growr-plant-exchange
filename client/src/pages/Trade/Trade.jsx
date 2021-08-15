import { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import TradeCard from "../../components/TradeCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import API from "../../util/API/API";
import "./Trade.css";

const growrGreen = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  distance: {
    color: growrGreen,
  }
}));

export default function Trade() {

  const classes = useStyles();

  const [tradeDataState, setTradeDataState] = useState([]);
  // optimization add state for loading

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadTrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all trades near userid
  function loadTrades() {
    API.getTrades(userId)
      .then((res) => {
        let tradeArr = [];

        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res.data[i].trades.length; j++) {
            let tradeLoop = res.data[i].trades[j];
            // console.log(tradeLoop)
            if (tradeLoop) {
              tradeLoop.name = res.data[i].name;
              tradeArr.push(tradeLoop);
            }
          }
        }
        setTradeDataState(tradeArr);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="trade" />
      <Box align="center">
      <Typography variant="caption" className={classes.distance}>showing trades within 15 miles</Typography>
      </Box>
      <Gallery>
        {tradeDataState.map((trade, index) => {
          return <TradeCard key={index} trade={trade} loadTrades={loadTrades} />;
        })}
      </Gallery>
    </>
  );
}

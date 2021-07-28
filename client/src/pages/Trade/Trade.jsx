import TradeCard from "../../components/TradeCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import { useState, useEffect } from "react";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import API from "../../util/API/API";
import "./Trade.css";

const growrGreen = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  distance: {
    color: growrGreen,
  }
}));

export default function Trade(props) {

  const classes = useStyles();

  const [tradeDataState, setTradeDataState] = useState([]);
  const [convoDataState, setConvoDataState] = useState([]);
  const [allData, setAllData] = useState([])
  // optimization add state for loading

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadTrades();
  }, []);

  // Loads all trades near userid
  function loadTrades() {
    API.getTrades(userId)
<<<<<<< HEAD
      .then( (res) => {
        // console.log(res.data)
=======
      .then((res) => {
>>>>>>> master
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
<<<<<<< HEAD
        setTradeDataState(
          tradeArr)
          // console.log(tradeArr)
=======
        setTradeDataState(tradeArr);
>>>>>>> master
      })
      .catch((err) => console.log(err));
  }

  // retireve conversation by userId
  useEffect(() => {
    loadConvo(userId);
  }, []);

  // API axios call for conversations by userId
  function loadConvo(id) {
    API.getConvo(id)
      .then((res) => {
        console.log(res.data);
        setConvoDataState(res.data)
      })
      .catch((err) => console.log(err));
  }

  const concatData = tradeDataState.concat(convoDataState)
  console.log(concatData)

  return (
    <>
      <NavBar page="trade" />
      <Box align="center">
      <Typography variant="caption" className={classes.distance}>showing trades within 15 miles</Typography>
      </Box>
      <Gallery>
<<<<<<< HEAD
        {tradeDataState.map( (trade) => {
          return <TradeCard trade={trade} loadTrades={loadTrades} convo={convoDataState} />;
=======
        {tradeDataState.map((trade, index) => {
          return <TradeCard key={index} trade={trade} loadTrades={loadTrades} />;
>>>>>>> master
        })}
      </Gallery>
    </>
  );
}

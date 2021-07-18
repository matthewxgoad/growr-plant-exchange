import TradeCard from "../../components/TradeCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import { useState, useEffect } from "react";
import API from "../../util/API";
import "./Trade.css";

export default function Places(props) {
  const [tradeDataState, setTradeDataState] = useState([]);
  // optimization add state for loading

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadTrades();

  }, []);

  // Loads all trades near userid
  function loadTrades() {
    API.getTrades(userId)
      .then( (res) => {
        console.log(`trade info`, res)
        let temp = [];

        for(let i = 0; i < res.data.length; i++){

          for(let j = 0; j < res.data[i].trades.length; j++){
            let tempTrade = res.data[i].trades[j];
            console.log(tempTrade)
            if(tempTrade){
              tempTrade.name = res.data[i].name;
              temp.push(tempTrade)
            }
          }
        }
        // console.log("temp", temp)
        setTradeDataState(
          temp)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="trade" />
      <Gallery>
        {tradeDataState.map( (trade) => {
          return <TradeCard  trade={trade} />;
        })}
      </Gallery>
    </>
  );
}

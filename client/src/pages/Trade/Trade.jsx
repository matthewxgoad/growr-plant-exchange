import TradeCard from "../../components/TradeCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
// import tradeData from "../../tradeData";
// delete above
import { useState, useEffect } from "react";
import API from "../../util/API";
// debugging is this path correct?
import "./Trade.css";

export default function Places(props) {
  const [tradeDataState, setTradeDataState] = useState([]);
  // optimization add state for loading
  // debug array or string?

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  useEffect(() => {
    loadTrades();
  }, []);

  // Loads all trades near userid
  function loadTrades() {
    API.getTrades(userId)
      .then( (res) => {
        console.log(res)
        setTradeDataState(res.data[0].trades)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="trade" />
      <Gallery>
        {tradeDataState.map( (trade) => {
          return <TradeCard trade={trade} />;
        })}
      </Gallery>
    </>
  );
}

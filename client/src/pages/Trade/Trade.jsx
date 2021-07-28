import TradeCard from "../../components/TradeCard";
import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery";
import { useState, useEffect } from "react";
import API from "../../util/API/API";
import "./Trade.css";

export default function Places(props) {
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
      .then( (res) => {
        // console.log(res.data)
        let tradeArr = [];

        for(let i = 0; i < res.data.length; i++){
          for(let j = 0; j < res.data[i].trades.length; j++){
            let tradeLoop = res.data[i].trades[j];
            // console.log(tradeLoop)
            if(tradeLoop){
              tradeLoop.name = res.data[i].name;
              tradeArr.push(tradeLoop)
            }
          }
        }
        setTradeDataState(
          tradeArr)
          // console.log(tradeArr)
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
      <Gallery>
        {tradeDataState.map( (trade) => {
          return <TradeCard trade={trade} loadTrades={loadTrades} convo={convoDataState} />;
        })}
      </Gallery>
    </>
  );
}

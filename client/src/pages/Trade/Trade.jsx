import TradeCard from '../../components/TradeCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import tradeData from '../../tradeData';
import { useState } from 'react';
import "./Trade.css"

export default function Places(props) {
  const [ tradeDataState, setTradeDataState ] = useState(tradeData);
  
  return (
    <>
      <NavBar page="trade"/>
      <Gallery>
      {tradeDataState.map(trade => {
        return (
          
            <TradeCard trade={trade}/>
          
        )
      })}
      </Gallery>
    </>
  );
}

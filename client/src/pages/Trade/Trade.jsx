import TradeCard from '../../components/TradeCard';
import NavBar from '../../components/NavBar';
import Gallery from '../../components/Gallery';
import tradeData from '../../tradeData';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import "./Trade.css"

export default function Places() {
  const [ tradeDataState, setTradeDataState ] = useState(tradeData);
  
  return (
    <>
      <NavBar />
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

import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Gallery from "../../components/Gallery/Gallery";
import TradeCard from "../../components/TradeCard/TradeCard";
import { Grid } from "@material-ui/core";
import "./trade.css";

export default function Trade() {
  return (
    <Grid 
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      >
      <Leftbar name="trade" />

      <Gallery>
        <TradeCard />
      </Gallery>

      <Rightbar />
    </Grid>
  );
}

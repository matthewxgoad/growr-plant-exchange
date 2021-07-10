import NavBar from "../../components/NavBar";
import Gallery from "../../components/Gallery/Gallery";
import TradeCard from "../../components/TradeCard/TradeCard";
import { Grid } from "@material-ui/core";
import "./Trade.css";

export default function Trade() {
  return (
    <>
    <NavBar />
    <Grid 
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      >
      <Gallery>
        <TradeCard />
      </Gallery>
    </Grid>
    </>
  );
}

import "./leftbar.css";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";


export default function Leftbar(props) {

  return (
    <Grid item xs>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <Link class="link" to="/">growr</Link>
          <h2>{props.name}</h2>
        </div>
      </div>
    </Grid>
  );
}

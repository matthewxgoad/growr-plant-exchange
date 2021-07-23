import {React, useState} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import moment from "moment";
import API from "../../util/API/API";

const tradeBlue = blue[900];
const tradeGreen = green[700];
const tradeRed = red[900];

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px",
    height: "fit-content",
  },
  media: {
    height: 250,
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: "1rem",
  },
  timeStamp: {
    fontSize: ".75rem",
  },
  action: {
    alignSelf: "end",
  },
  tradeTrade: {
    color: tradeBlue,
  },
  tradeFree: {
    color: tradeGreen,
  },
  tradeReq: {
    color: tradeRed,
  },
});



export default function TradeCard({ trade, loadTrades }) {
  const classes = useStyles(trade.tradeType);
  const [readMoreState, setReadMoreState] = useState(false)

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  console.log( "userId", userId, "creatorId", trade.creator)

  const formatedDate = moment(trade.tradeCreated).format("L");

  function deleteTrade(id) {
    API.deleteTrade(id)
      .then((res) => loadTrades())
      .catch((err) => console.log(err));
  }

  let tradeColor = () => {
    if (trade.tradeType === "free") {
      return classes.tradeFree;
    } else if (trade.tradeType === "request") {
      return classes.tradeReq;
    } else if (trade.tradeType === "trade") {
      return classes.tradeTrade;
    }
  };

  return (
    <Card className={classes.root}>
      {/* trade Photo */}
      <CardMedia
        className={classes.media}
        image={trade.image}
        title={trade.description}
      />

      <CardContent>
        <Typography variant="overline" className={tradeColor()}>
          {trade.tradeType.toUpperCase()}
        </Typography>
        {/* trade Title */}
        <Typography className={classes.title}>
          {trade.title.toUpperCase()}
        </Typography>
        <br />
        <Typography gutterBottom variant="body2">
          {readMoreState? trade.description : `${trade.description.substring(0, 50)}...`}
          <button onClick={() => setReadMoreState(!readMoreState)}>{readMoreState? 'show less':'read more'}</button>
          {/* {trade.description} */}
        </Typography>
        <br />
        <Typography gutterBottom variant="caption" color="textSecondary">
          Posted by <Link to={`/profiles/${trade.creator}`}>{trade.name}</Link>{" "}
          on {formatedDate}
        </Typography>
      </CardContent>

      <CardActions className={classes.action}>
        {/* if  userid === trade.creator DELETE else CONTACT */}
        { userId !== trade.creator ? (
          <Button
            size="small"
            color="secondary"
            href={`/profiles/${trade.creator}`}
          >
            CONTACT
          </Button>
        ) : (
          <Button
            size="small"
            color="secondary"
            onClick={() => deleteTrade(trade._id)}
          >
            DELETE
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

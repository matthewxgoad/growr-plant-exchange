import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import moment from "moment";

const tradeBlue = blue[900];
const tradeGreen = green[700];
const tradeRed = red[900];

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px",
    height: "fit-content"
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

export default function TradeCard({ trade }) {
  const classes = useStyles( trade.tradeType );

  const formatedDate = moment(trade.tradeCreated).format("L");

  let tradeColor = () => {
   if (trade.tradeType === "free") {
    return classes.tradeFree
  } else if (trade.tradeType === "request") {
    return classes.tradeReq
  } else if (trade.tradeType === "trade") {
    return classes.tradeTrade
  }};

    // Concats link to creator profile
  // const creatorLink = "/profile/" + trade.creator;


  return (
    <Card className={classes.root}>
      {/* trade Photo */}
      <CardMedia
        className={classes.media}
        image={trade.image}
        title={trade.description}
      />

      <CardContent>
        <Typography 
          variant="overline" 
          className={tradeColor()}
          >
          {trade.tradeType.toUpperCase()}
        </Typography>
        {/* trade Title */}
        <Typography className={classes.title}>{trade.title.toUpperCase()}</Typography>
        <br />
        <Typography gutterBottom variant="body2">
          {trade.description}
        </Typography>
        <br />
        <Typography gutterBottom variant="caption" color="textSecondary">
          Posted by <Link to={`/profiles/${trade.creator}`}>{trade.name}</Link> on {formatedDate}
        </Typography>
      </CardContent>

      <CardActions className={classes.action}>
        {/* Button click initiates either email or messaging */}
        <Button size="small" color="secondary" href={`/profiles/${trade.creator}`}>
          CONTACT
        </Button>
      </CardActions>
    </Card>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import moment from 'moment';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px",
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
});

export default function TradeCard({ trade }) {
  const classes = useStyles();

  const formatedDate = moment(trade.tradeCreated).format("L")

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        {/* trade Photo */}
        <CardMedia
          className={classes.media}
          image={trade.image}
          title={trade.description}
        />

        <CardContent>
          {/* trade Title */}
          <Typography className={classes.title}>{trade.title}</Typography>

          <Typography gutterBottom variant="caption" color="textSecondary">
            {trade.description}
          </Typography>
              <br />
          <Typography gutterBottom variant="caption" color="textSecondary">
            Created by {trade.name}
          </Typography>

          <Typography gutterBottom className={classes.timeStamp}>
            Date Posted: {formatedDate}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {/* Button click initiates either email or messaging */}
        <Button size="small" color="secondary">
          {trade.tradeType}
        </Button>
      </CardActions>
    </Card>
  );
}

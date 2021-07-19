import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

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
});

export default function EventCard({ event }) {
  const classes = useStyles();
  const formatedDate = moment(event.date).format("dddd, MMMM Do YYYY");
  const formatedTime = moment(event.time).format("LT");

  // Concats link to post creator profile
  const creatorLink = "/profile/" + event.creator;

  return (
    <Card className={classes.root}>
      {/* Event Photo */}
      <CardMedia
        className={classes.media}
        image={event.image}
        title={event.description}
      />

      <CardContent>
        {/* Event Title */}
        <Typography className={classes.title}>
          {event.title.toUpperCase()}
        </Typography>

        <br />

        {/* Event Info */}
        <Typography gutterBottom variant="subtitle2">
          {formatedDate} {formatedTime}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {event.address}
        </Typography>

        <br />

        <Typography gutterBottom variant="body2">
          {event.description}
        </Typography>

        <br />

        <Typography gutterBottom variant="caption" color="textSecondary">
          Created by <Link href={creatorLink}>{event.name}</Link>
        </Typography>
      </CardContent>

      {/* <CardActions className={classes.action}>
        <Button size="small" color="secondary" href={event.website}>
          
          {event.website}remove.Once-Website-Is.added
        </Button>
      </CardActions> */}
    </Card>
  );
}

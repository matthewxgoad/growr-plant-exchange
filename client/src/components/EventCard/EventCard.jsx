import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: "1rem",
  },
  distance: {
    fontSize: ".75rem",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EventCard({ event }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        {/* Event Photo */}
        <CardMedia
          className={classes.media}
          image={event.photo}
          title={event.description}
        />

        <CardContent>
          {/* Event Title */}
          <Typography className={classes.title}>{event.title}</Typography>

          {/* Event Info */}
          <Typography gutterBottom className={classes.subtitle}>
            {event.eventDate} {event.eventTime}
            <br />
            {event.address.street}
            <br />
            {event.address.city} {event.address.state} {event.address.zip}
          </Typography>

          <Typography gutterBottom variant="caption" color="textSecondary">
            {event.description}
          </Typography>

          <Typography gutterBottom className={classes.distance}>
            {event.distance} away
          </Typography>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="secondary">
          {event.website}
        </Button>
      </CardActions>
    </Card>
  );
}

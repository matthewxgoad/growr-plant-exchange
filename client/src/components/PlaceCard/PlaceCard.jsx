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
    margin: "10px",
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
  creator: {
    fontSize: ".75rem",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PlaceCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        {/* place Photo */}
        <CardMedia
          className={classes.media}
          image={place.image}
          title={place.description}
        />

        <CardContent>
          {/* place Title */}
          <Typography className={classes.title}>{place.title}</Typography>

          {/* place Info */}
          <Typography gutterBottom className={classes.subtitle}>

            {place.address}
            <br />
  
          </Typography>

          <Typography gutterBottom variant="caption" color="textSecondary">
            {place.description}
          </Typography>

          <Typography gutterBottom className={classes.creator}>
           Created by {place.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="secondary">
          {place.website}
        </Button>
      </CardActions>
    </Card>
  );
}

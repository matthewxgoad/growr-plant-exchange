import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import API from "../../util/API/API";

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
  creator: {
    fontSize: ".75rem",
  },
  action: {
    alignSelf: "end",
  }
});

export default function PlaceCard({ place, loadPlaces }) {
  const classes = useStyles();

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  // Concats link to creator profile
  const creatorLink = "/profiles/" + place.creator;

  function deletePlace(id) {
    API.deletePlace(id)
      .then((res) => loadPlaces())
      .catch((err) => console.log(err));
  }

  return (
    <Card className={classes.root}>
        {/* place Photo */}
        <CardMedia
          className={classes.media}
          image={place.image}
          title={place.description}
        />

        <CardContent>
          {/* place Title */}
          <Typography className={classes.title}>{place.title.toUpperCase()}</Typography>

          {/* place Info */}
          <Typography gutterBottom className={classes.subtitle}>
            {place.address}
          </Typography>
            <br />
          <Typography gutterBottom variant="body2">
            {place.description}
          </Typography>
            <br />
          <Typography gutterBottom variant="caption" color="textSecondary">
           Created by <Link href={creatorLink}>{place.name}</Link>
          </Typography>
          
        </CardContent>

      <CardActions>
        <Button size="small" color="secondary" href={place.website}>
          WEBSITE
        </Button>
        { userId !== place.creator ? (
          <div/>
        ) : (
          <Button
            size="small"
            color="secondary"
            onClick={() => deletePlace(place._id)}
          >
            DELETE
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

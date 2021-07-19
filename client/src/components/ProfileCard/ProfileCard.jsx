import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';



const useStyles = makeStyles({
  root: {
    width: 350,
    margin: "10px",
  },
  media: {
    height: 250,
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: "1.5rem",
  },
  userSince: {
    fontSize: "1rem",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard( {profile} ) {
  const classes = useStyles();
  const formatedDate = moment(profile.userCreated).format("MMMM YYYY")

  return (
    <Card className={classes.root} elevation={7}>
      
        {/* Profile Photo */}
        <CardMedia
          className={classes.media}
          image={profile.image}
          title={profile.name}
        />

        <CardContent>
          {/* Profile Username */}
          <Typography className={classes.title}>{profile.name}</Typography>

          <Typography gutterBottom variant="h6" color="textSecondary">
            Neighborhood: {profile.neighborhood}
            {/* update this to city and state only */}
            {/* or just use Neighborhood */}
          </Typography>

          <Typography gutterBottom className={classes.userSince}>
            User since {formatedDate}
            {/* update this to something human readable */}
          </Typography>
        </CardContent>
      

      <CardActions>
        {/* Button click initiates either email or messaging */}
        <Button size="small" color="secondary" href={"mailto:" + profile.email}>
        EMAIL
        </Button>
      </CardActions>
    </Card>
  );
}

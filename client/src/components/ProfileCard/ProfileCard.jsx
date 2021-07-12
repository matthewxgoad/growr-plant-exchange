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
    flexGrow: 1,
    width: 400,
  },
  media: {
    height: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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

export default function ProfileCard() {

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        {/* Profile Photo */}
        <CardMedia
          className={classes.media}
          image='https://imagez.tmz.com/image/c0/4by3/2020/07/06/c0b290ca5d1b4cb0a1dbec3509d509d4_md.jpg'
          title='plantdaddy'
        />

        <CardContent>
          {/* Profile Username */}
          <Typography className={classes.title}>plantdaddy</Typography>

          <Typography gutterBottom variant="caption" color="textSecondary">
            Saint Louis, MO
          </Typography>

          <Typography gutterBottom className={classes.userSince}>
          user since 2020
          </Typography>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        {/* Button click initiates either email or messaging */}
        <Button size="small" color="secondary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}

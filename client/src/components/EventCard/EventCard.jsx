import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 400,
  },
  media: {
    height: 150,
  },
});

export default function EventCard( {event} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={event.photo}
          title={event.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {event.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {event.date} {event.time}<br/>
            {event.address.street}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {event.website}
        </Button>
      </CardActions>
    </Card>
  );
}

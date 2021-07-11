import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import './Gallery.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Gallery(props) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {props.children}
        </Grid>
      </div>
    </Container>
  );
}

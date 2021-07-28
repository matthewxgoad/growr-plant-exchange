import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './Gallery.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1, 1),
    margin: theme.spacing(1, 1),
  }
}));

export default function Gallery(props) {
  const classes = useStyles();

  return (
        <Grid container justifyContent="center" spacing={2} className={classes.root}>
          {props.children}
        </Grid>
    
  );
}

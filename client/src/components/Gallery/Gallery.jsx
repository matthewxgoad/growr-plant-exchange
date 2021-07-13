import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './Gallery.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Gallery(props) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container justifyContent="center" spacing={2}>
          {props.children}
        </Grid>
      </div>
    
  );
}

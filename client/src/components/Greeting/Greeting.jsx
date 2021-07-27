import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import green from '@material-ui/core/colors/green';
import growrScreenshot from "../../assets/plant-trading-screenshot.png";
import "./Greeting.css";

const growrColor = green[800];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2), 
  },
  growrHeader: {
    fontFamily: 'Dancing Script',
    color: growrColor,
    fontSize:"70px",
    textAlign: "center",
    marginBottom: 0,
  },
  growrSub: {
    fontFamily: 'Oswald',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonHolder: {
    textAlign: "center"
  }
}));

export default function Greeting() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <Typography className={classes.growrHeader}>
            growr
          </Typography>
          
        
          <Typography className={classes.growrSub} gutterBottom variant="h6" component="h4">
            Connecting green thumbs in your community.
          </Typography>
          <Typography gutterBottom component="p">
            Welcome to Growr, a plant exchange app with the focus of promoting
            community/local gathering and networking through the love of all
            things plant related.
          </Typography>
          <div className={classes.buttonHolder}>
            <Button variant="contained" color="primary" className={classes.button} href="/about">About</Button>
          </div>
        </Paper>
        <Box>
            
            <img
              src={growrScreenshot}
              alt="Plant trading screenshot"
            />
          </Box>
      </Container>
    </>
  );
}

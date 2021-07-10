import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NavBarMenu from '../NavBarMenu';
import green from '@material-ui/core/colors/green';
import { Link } from 'react-router-dom';
import './NavBar.css';

const navColor = green[600];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Dancing Script' 
  },
  navBar: {
    background: navColor,
  },
  links: {
    textDecoration: 'none',
    color: 'white',
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavBarMenu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            growr
          </Typography>
          <Button color="inherit"><Link to="/login" className={classes.links}>Log In</Link></Button>
          <Button color="inherit"><Link to="/signup" className={classes.links}>Sign Up</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

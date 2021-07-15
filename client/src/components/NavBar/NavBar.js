import React from 'react';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import grey from "@material-ui/core/colors/grey";
import teal from "@material-ui/core/colors/teal";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { makeStyles, AppBar, Toolbar, Typography, Button, Link, List, 
  Divider, ListItem, ListItemText, Drawer, IconButton } from "@material-ui/core";

const drawerColor = grey[800];
const navColor = teal[600];

const useStyles = makeStyles((theme) => ({
  paper: {
    background: drawerColor,
    color: "white",
  },
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Dancing Script",
  },
  nav: {
    background: navColor,
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
  pageName: {
    fontFamily: 'Oswald',
    fontSize: '1.25rem',
  }
}));

export default function NavBar( {page} ) {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  function handleLogout() {
    localStorage.clear();
  }

  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className>
        <ListItem button component={Link} color="inherit" href="/add">
          <ListItemText primary="add" />
          {/* Viewable if logged in */}
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/trade">
          <ListItemText primary="trade" />
          {/* Viewable if logged in */}
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/events">
          <ListItemText primary="events" />
          {/* Viewable if logged in */}
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/places">
          <ListItemText primary="places" />
          {/* Viewable if logged in */}
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/inbox">
          <ListItemText primary="inbox" />
          {/* Viewable if logged in */}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} color="inherit" href="/about">
          <ListItemText primary="about" />
          {/* Viewable if logged in OR out */}
        </ListItem>
      </List>
    </div>
  );
  return (
    
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          {user ? //is user logged in?
            <>
            <div className="menu-btn">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  classes={{ paper: classes.paper }}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <Typography variant="h4" className={classes.title}>
            growr <span className={classes.pageName}>{page}</span>
          </Typography>
              <Button color="inherit">
                <Link component={Link} className={classes.links} href="/profile">
                  Profile
                </Link>
              </Button>
              <Button onClick={handleLogout} color="inherit">
                <Link component={Link} className={classes.links} href="/">
                Logout
                </Link>
              </Button>
            </> 
            : 
            <>
              <Button color="inherit">
                <Link component={Link} className={classes.links} href="/login">
                  Log In
                </Link>
              </Button>
              <Button color="inherit">
                <Link component={Link} className={classes.links} href="/signup">
                  Sign Up
                </Link>
              </Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

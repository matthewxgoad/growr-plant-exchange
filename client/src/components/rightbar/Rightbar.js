import "./rightbar.css";
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import grey from '@material-ui/core/colors/grey';
import Link from '@material-ui/core/Link';

const drawerColor = grey[800]; 

const useStyles = makeStyles({
  paper: {
    background: drawerColor,
    color: 'white',
  },
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} >

      <List className>
        <ListItem button component={Link} color="inherit" href="/add">
          <ListItemText primary="add"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/trade">
          <ListItemText primary="trade"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/events">
          <ListItemText primary="events"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/places">
          <ListItemText primary="places"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/profile">
          <ListItemText primary="profile"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/inbox">
          <ListItemText primary="inbox"/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button component={Link} color="inherit" href="/about">
          <ListItemText primary="about"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} color="inherit" href="/logout">
          <ListItemText primary="logout"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="rightbar">
      <div className="menu-btn">
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              
                <img alt="menu-tab" src="./assets/plant5.png" />
              </Button>
            <Drawer 
            anchor={anchor} 
            open={state[anchor]} 
            onClose={toggleDrawer(anchor, false)}
            classes={{ paper: classes.paper }}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
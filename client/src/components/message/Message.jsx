// eslint-disable-next-line
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import indigo from '@material-ui/core/colors/blue';

const primary = indigo[700]

const useStyles = makeStyles(() => ({
  root: {
    margin: "15px 10px",
    display: "flex",
  },
  own: {
    textAlign: "right",
    backgroundColor: primary
  },
  timeStamp: {
    fontSize: "8px"
  },
  avatar: {
    width: "50px",
    height: "50px",
    margin: "0 20px",
  },
}));

export default function Message({ message, own }) {
  const classes = useStyles();

  return (
    // wrap this in conditional using user id from conversation post route
    <>
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="username"
                src="data from img file"
                className={classes.avatar}
              >
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  className={own ? classes.own : null}
                  align="left"
                  primary= {message.text}
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText align="left" primary={message.createdAt} />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </div>
      {/* <div>
        <List>
          <ListItem>
            <Grid container>
              <Grid item xs={12}>
                <ListItemText
                  className={classes.own}
                  primary="post call for conversation data"
                />
              </Grid>
              <Grid item xs={12}>
                <ListItemText className={classes.timeStamp} primary="time stamp" />
              </Grid>
            </Grid>
            <ListItemAvatar>
              <Avatar
                alt="username"
                src="data from img file"
                className={classes.avatar}
              >
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </div> */}
    </>
  );
}

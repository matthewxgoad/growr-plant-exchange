// eslint-disable-next-line
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';

const friendColor = indigo[50];
const ownColor = blueGrey[50];

const useStyles = makeStyles(() => ({
  root: {
    margin: "15px 10px",
    display: "flex",
    justifyContent: "flex-start",
  },
  ownRoot: {
    margin: "15px 10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  message: {
    "& span": {
      padding: "10px",
      textAlign: "left",
      backgroundColor: friendColor,
      borderRadius: 15
    }
  },
  ownMessage: {
    "& span": {
      padding: "10px",
      textAlign: "right",
      backgroundColor: ownColor,
      borderRadius: 15
    },
    "& p": {
      textAlign: "right"
    }
  },
  // timeStamp: {
  //   "& span":{
  //     fontSize: "12px"
  //   }
  // },
  // ownTimeStamp: {
  //   "& span":{
  //     fontSize: "12px",
  //     textAlign: "right"
  //   }
  // },
  avatar: {
    width: "50px",
    height: "50px",
    margin: "0 20px",
  }
}));

export default function Message({ message, own}) {
  const classes = useStyles();

  return (
    // if not own message > avatar first; otherwise > avatar second
    <>
    { !(own) ?
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
            {/* <Grid container>
              <Grid item xs={12}> */}
                <ListItemText
                  className={classes.message}
                  primary= {message.text}
                  secondary= {message.createdAt}
                />
              {/* </Grid>
              <Grid item xs={12}>
                <ListItemText className={classes.timeStamp} primary={message.createdAt} />
              </Grid>
            </Grid> */}
          </ListItem>
        </List>
      </div>
      :
      <div className={classes.ownRoot}>
        <List>
          <ListItem alignItems="flex-end">
            {/* <Grid container>
              <Grid item xs={12}> */}
                <ListItemText
                  className={classes.ownMessage}
                  primary= {message.text}
                  secondary= {message.createdAt}
                />
              {/* </Grid>
              <Grid item xs={12}>
                <ListItemText className={classes.ownTimeStamp} primary={message.createdAt} />
              </Grid>
            </Grid> */}
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
      </div>
          }
    </>
  );
}

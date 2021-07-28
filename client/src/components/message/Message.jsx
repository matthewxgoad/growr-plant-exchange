// eslint-disable-next-line
import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import indigo from '@material-ui/core/colors/indigo';
import blueGrey from '@material-ui/core/colors/blueGrey';
import moment from "moment";
import API from "../../util/API/API";

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
  avatar: {
    width: "50px",
    height: "50px",
    margin: "0 20px",
  }
}));

export default function Message({ message, own}) {
  const classes = useStyles();
  
  const [avatarDataState, setAvatarDataState] = useState("")

  const timeStamp = moment(message.createdAt).fromNow();

  useEffect(() => {
    loadAvatar(message.sender);
  }, [message]);

  function loadAvatar(id) {
    API.getUser(id)
      .then((res) => {
        setAvatarDataState(res.data.user)
      })
      .catch((err) => console.log(err));
  }

  
  return (
    // if not own message > avatar first; otherwise > avatar second
    <>
    { !(own) ?
      <div className={classes.root}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={avatarDataState?.name}
                src={avatarDataState?.image}
                className={classes.avatar}
              >
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
                <ListItemText
                  className={classes.message}
                  primary= {message.text}
                  secondary= {timeStamp}
                />
          </ListItem>
        </List>
      </div>
      :
      <div className={classes.ownRoot}>
        <List>
          <ListItem alignItems="flex-end">
                <ListItemText
                  className={classes.ownMessage}
                  primary= {message.text}
                  secondary= {timeStamp}
                />
            <ListItemAvatar>
              <Avatar
                alt={avatarDataState?.name}
                src={avatarDataState?.image}
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

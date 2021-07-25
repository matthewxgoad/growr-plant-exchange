// eslint-disable-next-line
import { React, useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import API from "../../util/API/API";

export default function Conversation({convo}) {
  const [friendDataState, setFriendDataState] = useState([]);
  // get current user id from local storage
  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  // variable for friendId = id's in members array that are not current user id
  const friendId = convo.members.find(m => m !== userId)
  
  // put friendId through getUserbyId API
  useEffect(() => {
    loadFriend(friendId);
  }, []);

  function loadFriend(id) {
    API.getUser(id)
      .then((res) => {
        // console.log(res.data.user);
        setFriendDataState(res.data.user)
      })
      .catch((err) => console.log(err));
  }


  return (
    <>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="username" src={friendDataState?.image}>
              <AccountCircle />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={friendDataState?.name} />
        </ListItem>
      <Divider />
    </>
  );
}

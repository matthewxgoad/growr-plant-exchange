import {React, useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import "./Inbox.css";
import InboxMenu from "../../components/InboxMenu";
import MessageBox from "../../components/MessageBox";
import { makeStyles } from "@material-ui/core";
import API from "../../util/API/API";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
}));

export default function Inbox(props) {
  const classes = useStyles();

  const [convoDataState, setConvoDataState] = useState([]);
  const [currentChatState, setCurrentChatState] = useState(null);
  // const [messageDataState, setMessageDataState] = useState([]);

  // retrieve logged in user's ID
  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  // retireve conversation by userId
  useEffect(() => {
    loadConvo(userId);
  }, []);

  // retireve message by conversationId
  // useEffect(() => {
  //   loadMessages(convoId);
  // }, []);

  // API axios call for conversations by userId
  function loadConvo(id) {
    API.getConvo(id)
      .then((res) => {
        // console.log(res.data);
        setConvoDataState(res.data);
      })
      .catch((err) => console.log(err));
  }

  // API axios call for messages by conversationId
  // function loadMessage(id) {
  //   API.getMessage(id)
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => console.log(err));
  // }

  return (
    <>
      <NavBar page="inbox" />
      <div className={classes.root}>
        <InboxMenu convo={convoDataState} currentChatState={currentChatState} setCurrentChatState={setCurrentChatState} />
        <MessageBox currentChat={currentChatState}/>
      </div>
    </>
  );
}

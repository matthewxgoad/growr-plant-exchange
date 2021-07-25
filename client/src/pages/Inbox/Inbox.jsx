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
  const [messagesDataState, setMessagesDataState] = useState([]);
  const [newMessageState, setNewMessageState] = useState("");

  // retrieve logged in user's ID
  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  // retireve conversation by userId
  useEffect(() => {
    loadConvo(userId);
  }, []);

  // API axios call for conversations by userId
  function loadConvo(id) {
    API.getConvo(id)
      .then((res) => {
        // console.log(res.data);
        setConvoDataState(res.data);
      })
      .catch((err) => console.log(err));
  }

    // retireve message by conversation ID
    useEffect(() => {
      loadMessages(currentChatState?.convo._id);
    }, [currentChatState?.convo]);

  // API axios call for messages by conversationId
  function loadMessages(id) {
    API.getMessages(id)
    .then((res) => {
      console.log(res.data);
      setMessagesDataState(res.data)
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar page="inbox" />
      <div className={classes.root}>
        <InboxMenu convo={convoDataState} currentChat={currentChatState} setCurrentChatState={setCurrentChatState} />
        <MessageBox currentChat={currentChatState} chatMessages={messagesDataState} setChatMessages={setMessagesDataState} newMessage={newMessageState} setNewMessage={setNewMessageState}/>
      </div>
    </>
  );
}

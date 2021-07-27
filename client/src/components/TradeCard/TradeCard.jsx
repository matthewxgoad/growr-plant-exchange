import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Paper, TextField } from '@material-ui/core';
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import moment from "moment";
import API from "../../util/API/API";

const tradeBlue = blue[900];
const tradeGreen = green[700];
const tradeRed = red[900];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: "10px",
    height: "fit-content",
  },
  media: {
    height: 250,
  },
  title: {
    fontSize: "1.5rem",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: "1rem",
  },
  timeStamp: {
    fontSize: ".75rem",
  },
  action: {
    alignSelf: "end",
  },
  tradeTrade: {
    color: tradeBlue,
  },
  tradeFree: {
    color: tradeGreen,
  },
  tradeReq: {
    color: tradeRed,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    height: 'auto',
    maxWidth: '50%',
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    flex: '5.5',
  },
  form: {
    marginTop: '15px'
  },
  btnWrap: {
    margin: '10px 10px 0 0',
    textAlign: 'right'
  }
}));

export default function TradeCard({ trade, loadTrades, convo }) {
  const classes = useStyles(trade.tradeType);

  const [open, setOpen] = useState(false);
  const [compare, setCompare] = useState()
  const [newConversation, setNewConversation] = useState(null);
  const [existingConversation, setExistingConversation] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  let loggedInUserData = JSON.parse(localStorage.getItem("user"));
  const userId = loggedInUserData;

  const formatedDate = moment(trade.tradeCreated).format("L");
  
  function deleteTrade(id) {
    API.deleteTrade(id)
      .then((res) => loadTrades())
      .catch((err) => console.log(err));
  }

  let tradeColor = () => {
    if (trade.tradeType === "free") {
      return classes.tradeFree;
    } else if (trade.tradeType === "request") {
      return classes.tradeReq;
    } else if (trade.tradeType === "trade") {
      return classes.tradeTrade;
    }
  };

  // handleing transition messageModal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

// LOGIC FOR MESSAGING
// When I click on a trade card MESSAGE button (onClick which also pops messageModal up): retrieve id data and set to setCompare (@ LINE 215)
// Loop through friendIdArray (@ LINE 130-141) > (this if else statement should be in handleSumbit function)
// If trade.creator does not exist in that comparison)
    // >>> create a new conversation with userID = senderId and trade.creator = recieverId
    // then (in MESSAGE MODAL onSumbit)
        // >>> create a new message in that new conversation using conversationId
// else trade.creator === "friendId" (in MESSAGE MODAL onSubmit)
    // >>> create a new message in that old conversation using conversationId
// dialogModal "message sent!" link options to inbox page or back to trade page

  // console.log(convo)
  // map through props data to return old array with memberArray
  const convoMembers = convo.map((memberId, index, array) => {
    return memberId.members;
  });
  // flatten nested array of convoMembers and return single array as membersArray
  const membersArray = convoMembers.reduce((r, members) => r.concat(members), []);
  // filter through membersArray and return what is NOT equal to userId as friendIdArray
  const filterMembersArray = (friendId) => {
    return friendId !== userId
  }
  const friendIdArray = membersArray.filter(filterMembersArray)
  console.log(friendIdArray)

  // handleSumbit will check compare.receiverId against id in friendIdArray and either call two API's or one API
  const handleSubmit = async (e) => {
    e.preventDefault();

    for(let i = 0; i < friendIdArray.length; i++){
      let checkFriend = friendIdArray[i];
      console.log(checkFriend)
      if(compare.receiverId !== checkFriend){
        // frist create new conversation
        try {
          await createConversation(compare)
        } catch (err) {
          console.log(err);
        }
        // declare variable for new message of new conversation
        const messageNew = {
          sender: userId,
          text: newMessage,
          conversationId: newConversation?._id
        };
        // then create new message for new conversation
        try{
          await createMessage(messageNew)
          // setNewMessageState("")
        } catch(err) {
          console.log(err);
        }
      }else {
        // declare variable for new message of existing conversation
        const message = {
          sender: userId,
          text: newMessage,
          conversationId: existingConversation?._id
        };
        // create new message for already existing conversation
        try {
          await createMessage(message)
        } catch(err){
          console.log(err);
        }
      }
    }

  }

  // axios post to create new Conversation
  function createConversation(members) {
    API.postConversation(members)
    .then((res) => {
      console.log("New Conversation created! >>> ", res.data)
      setNewConversation(res.data)
    })
    .catch((err) => console.log(err))
  }

  // axios post to create new Message
  function createMessage(data) {
    API.postMessage(data)
    .then((res) => {
      // console.log("New Message created! >>> ", res.data)
      setNewMessage("")
    })
    .catch((err) => console.log(err))
  }

  const handleOutgoingMessage = (e) => {
    setNewMessage(e.target.value)
  }

  console.log(compare)
  
  return (
    <Card className={classes.root}>
      {/* trade Photo */}
      <CardMedia
        className={classes.media}
        image={trade.image}
        title={trade.description}
      />

      <CardContent>
        <Typography variant="overline" className={tradeColor()}>
          {trade.tradeType.toUpperCase()}
        </Typography>
        {/* trade Title */}
        <Typography className={classes.title}>
          {trade.title.toUpperCase()}
        </Typography>
        <br />
        <Typography gutterBottom variant="body2">
          {trade.description}
        </Typography>
        <br />
        <Typography gutterBottom variant="caption" color="textSecondary">
          Posted by <Link to={`/profiles/${trade.creator}`}>{trade.name}</Link>{" "}
          on {formatedDate}
        </Typography>
      </CardContent>

      <CardActions className={classes.action}>
        {/* if  userid === trade.creator DELETE else CONTACT */}
        { userId !== trade.creator ? (
          <>
            <div
              onClick={() => {setCompare({senderId: userId, receiverId: trade.creator})
              }}
            >
              <Button
                size="small"
                color="secondary"
                onClick={handleOpen}
              >
                MESSAGE
              </Button>
            </div>
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                      <Paper elevation={20} className={classes.paper}>
                        <form 
                        onSubmit={handleSubmit} 
                        className={classes.form}>
                          <TextField 
                            required
                            fullWidth
                            multiline
                            rows={3}
                            value={newMessage}
                            onChange={handleOutgoingMessage} 
                            type='outgoing'
                            variant='outlined'
                            label={`Send a message about ${trade.title} to ${trade.name}`}
                          />
                          <div className={classes.btnWrap}>
                            <Button type='submit' variant='contained' color="primary" >
                              Send
                            </Button>
                          </div>
                        </form>
                      </Paper>
                    </Grid>
                  </Grid>
                </Fade>
              </Modal>
            </div>
          </>
        ) : (
          <Button
            size="small"
            color="secondary"
            onClick={() => deleteTrade(trade._id)}
          >
            DELETE
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

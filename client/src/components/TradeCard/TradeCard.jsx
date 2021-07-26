import {React, useState} from "react";
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



export default function TradeCard({ trade, loadTrades }) {
  const classes = useStyles(trade.tradeType);

  const [open, setOpen] = useState(false);
  const [newConvoState, setNewConvoState] = useState({})
  const [newMessageState, setNewMessageState] = useState("");

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newConvo = {
      senderId: userId,
      recieverId: trade.creator
    };

    try {
      const res = await API.postConversation(newConvo)
      console.log(res.data)
      setNewConvoState(res.data)
    } catch(err){
      console.log(err)
    }
    const message = {
      sender: userId,
      text: newMessageState,
      conversationId: newConvoState._id
    }
    try {
      await API.postMessage(message)
    } catch (err) {
      console.log(err)
    }
  };

  const handleOutgoingMessage = (e) => {
    setNewMessageState(e.target.value)
  }

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
            <Button
              size="small"
              color="secondary"
              onClick={handleOpen}
            >
              MESSAGE
            </Button>
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
                        <form  onSubmit={handleSubmit} className={classes.form}>
                          <TextField 
                            required
                            fullWidth
                            multiline
                            rows={3}
                            value={newMessageState}
                            onChange={handleOutgoingMessage} 
                            type='outgoing'
                            variant='outlined'
                            label={`Send a message about ${trade.title} to ${trade.name}`}
                          />
                          <div className={classes.btnWrap}>
                            <Button type='submit' variant='contained' color="primary">
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

import { React, useState } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import { makeStyles, withStyles } from '@material-ui/core';
import brown from "@material-ui/core/colors/brown";
import green from "@material-ui/core/colors/green";
import Message from "../../components/message/Message";
import API from "../../util/API/API";


const headerColor = green[600];
const newBrown = brown[600];

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: headerColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: newBrown,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: newBrown,
      },
      '&:hover fieldset': {
        borderColor: newBrown,
      },
      '&.Mui-focused fieldset': {
        borderColor: newBrown,
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 2,
      height: 'auto',
      maxWidth: '68%',
      margin: "20px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      flex: '5.5',
    },
    header: {
      margin: "0",
      fontFamily: 'Dancing Script',
      color: headerColor,
      fontSize: '35px'
    },
    messageBoxTop: {
      maxHeight: '60%',
      overflowY: 'auto',
    },
    form: {
      marginTop: '15px'
    },
    btnWrap: {
      margin: '10px 10px 0 0',
      textAlign: 'right'
    },
    btn: {
      backgroundColor: headerColor,
    }
  }));

export default function MessageBox(props) {
    const classes = useStyles();

    let loggedInUserData = JSON.parse(localStorage.getItem("user"));
    const userId = loggedInUserData;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const message = {
        sender: userId,
        text: props.newMessage,
        conversationId: props.currentChat.convo._id
      };

      try {
        const res = await API.postMessage(message)
        props.setChatMessages([...props.chatMessages, res.data])
        props.setNewMessage("")
      } catch (err) {
        console.log(err)
      }
    }

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   console.log('button clicked')
  
    //     const outgoingMessage = {
    //       message: message
    //     };
  
    //     console.log(message)
  
    //     try {
    //       console.log('>>>>>making a call<<<<<<<', outgoingMessage)
    //       await axios.post("http://localhost:3000/api/conversation", outgoingMessage);
    //     } catch (err) {
    //       console.log(err);
    //     }
    // };

    const handleOutgoingMessage = (event) => {
      props.setNewMessage(event.target.value)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                    <h2 className={classes.header}>Message</h2>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={20} className={classes.paper}>
                        {
                          props.currentChat ?
                        <>
                        <div className={classes.messageBoxTop}>
                          { props.chatMessages.map((message, index) => {
                              return <Message message={message} key={index} own={ message.sender === userId }/>;
                          })}
                        </div>
                        
                        <Divider/>
                        <form onSubmit={handleSubmit} className={classes.form}>
                          <CustomTextField 
                            required
                            fullWidth
                            value={props.newMessage}
                            onChange={handleOutgoingMessage} 
                            type='outgoing'
                            variant='outlined'
                            label='write something...'
                          />
                          <div className={classes.btnWrap}>
                            <Button type='submit' variant='contained' className={classes.btn}>
                              Send
                            </Button>
                          </div>
                        </form>
                        </> : <span>Which message do you want to see?</span>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

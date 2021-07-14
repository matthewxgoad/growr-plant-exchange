import React from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import Message from "../../components/message/Message";


const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        height: 'auto',
        margin: "20px"
      },
      paper: {
        padding: theme.spacing(2),
        marginTop: '10px',
        textAlign: 'center',
        height: '80%',
      },
    header: {
      margin: "0",
      fontFamily: 'Dancing Script',
      color: headerColor,
      fontSize: '35px'
    },
    uploadCaption: {
      marginBottom:"0",
    },
    submitBtn: {
      margin: '20px 0px',
      textAlign:'center'
    },
    link: {
      textDecoration: "none",
      fontWeight: 'bolder',
    },
  }));

export default function MessageBox() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                    <h2 className={classes.header}>Message</h2>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={20} className={classes.paper}>
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true}/>
                            <Message />
                            <Message own={true}/>
                            <Message />
                            <Message />
                            <Message own={true}/>
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                      </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

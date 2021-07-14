import React from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import Conversation from "../../components/Conversation";

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 'auto',
        margin: "20px"
      },
      paper: {
        padding: theme.spacing(2),
        marginTop: '10px',
        textAlign: 'center',
        height: '100%',
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

export default function InboxMenu() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                    <h2 className={classes.header}>Conversations</h2>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={20} className={classes.paper}>
                    <div>
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
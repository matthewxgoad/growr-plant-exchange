import React from 'react';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import InboxItem from "../../components/InboxItem";

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 'auto',
        margin: "20px"
      },
      paper: {
        padding: theme.spacing(2),
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
                    <h2 className={classes.header}>Inbox</h2>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={20} className={classes.paper}>
                    <div>
                        <InboxItem/>
                        {/* should be only one compoenent > hardcoded to show example */}
                        <InboxItem/>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
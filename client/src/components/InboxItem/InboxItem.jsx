import {React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function Conversation() {


    return (
        <>
            <List>
                <ListItem
                    button  
                >
                    <ListItemAvatar>
                        <Avatar alt="username" src="data from img file">
                            <AccountCircle/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='post call for username'/>
                </ListItem>
            </List>
            <Divider/>
        </>
    )
}
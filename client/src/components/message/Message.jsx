// import "./message.css"

// export default function Message({own}) {
//     return (
//         <div className={own ? "message own" : "message"}>
//             <div className="messageTop">
//                 <img
//                     className="messageImg"
//                     src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png"
//                     alt=""
//                 />
//                 <p className="messageText">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 </p>
//             </div>
//             <div className="messageBottom">1 hour ago</div>
//         </div>
//     )
// }

import {React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(() => ({
    root: {
        margin: "15px 10px",
        display: "flex"
    },
    avatar: {
        width: "50px",
        height: "50px",
        margin: "0 20px"
      },
    }));

export default function Message({own}) {

    const classes = useStyles();

    return (
        // wrap this in conditional using user id from conversation post route
        <>
        <div className={classes.root}>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="username" src="data from img file" className={classes.avatar}>
                            <AccountCircle/>
                        </Avatar>
                    </ListItemAvatar>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary='time stamp'/>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </div>
        <div>
            <List>
                <ListItem>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary='post call for conversation data'/>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary='time stamp'/>
                        </Grid>
                    </Grid>
                    <ListItemAvatar>
                        <Avatar alt="username" src="data from img file" className={classes.avatar}>
                            <AccountCircle/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItem>
            </List>
        </div>
        </>
    )
}
import { React, useState } from 'react';
import './LoginForm.css';
import { Grid,Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";
import { useContext } from "react";
import { loginRequest } from "../../loginRequest";
import { AuthContext } from "../../context/AuthContext";

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: '0px',
        paddingBottom: '30px',
        paddingLeft: '100px',
        paddingRight: '100px',
        width:600, 
        margin:'20px auto'
    },
    header: {
      margin: "0",
      fontFamily: 'Dancing Script',
      color: headerColor,
      fontSize: '70px'
    },
    textField: {
        marginTop: '10px'
    },
    loginBtn: {
      margin: '20px 0px',
      textAlign:'center'
    },
    link: {
      textDecoration: "none",
      fontWeight: 'bolder',
    },
}));

export default function LoginForm() {   
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isFetching, dispatch } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        loginRequest(
          { email: email, password: password },
          dispatch
        );
      };

    const handleEmailInput = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) =>{
        setPassword(event.target.value)
    }

    return (
        <Grid>
            <Paper elevation={20} className={classes.paper}>
                <Grid align='center'>
                    <h2 className={classes.header}>growr</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField 
                      onChange={handleEmailInput} 
                      label='Email'
                      placeholder='Enter your email'
                      size='small' 
                      className={classes.textField} 
                      variant='outlined' 
                      required fullWidth 
                    />
                    <TextField 
                      onChange={handlePasswordInput}
                      label='Password' 
                      type='password'
                      placeholder='Enter your password'
                      size='small' 
                      className={classes.textField} 
                      variant='outlined'  
                      required fullWidth 
                    />
                    <div className={classes.loginBtn}>
                        <Button 
                          type='submit' 
                          variant='contained' 
                          color='primary' 
                          disabled={isFetching}>
                          {isFetching ?
                              (<CircularProgress/>) : ( "Log In")}
                        </Button>
                    </div>
                </form>
                <Grid align='center'>
                    <Link 
                      className={classes.link} 
                      component={Link} 
                      href='/signup'>
                        Don't have an account? Click here to sign up
                    </Link>
                </Grid>
            </Paper>
        </Grid>
    )
}


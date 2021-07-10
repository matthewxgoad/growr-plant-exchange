import React from 'react';
import './SignUpForm.css';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";


const headerColor = green[600];


const useStyles = makeStyles((theme) => ({
    paper: {
        padding:'50px 50px', 
        width:400, 
        margin:'20px auto'
    },
    header: {
      margin: "0",
      fontFamily: 'Dancing Script',
      color: headerColor,
      fontSize: '80px'
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

export default function SignUpForm() {
    const classes = useStyles();
    return (
        <Grid>
            <Paper elevation={20} className={classes.paper}>
                <Grid align='center'>
                    <h2 className={classes.header}>growr</h2>
                    <h4>Fill out form below to create a new account</h4>
                </Grid>
                <form>
                    <TextField required fullWidth label='Username' placeholder='Create a username'/>
                    <TextField required fullWidth label='Email' placeholder='Enter your email'/>
                    <TextField required fullWidth label='Address' placeholder='Enter your address'/>
                    <TextField type='password' required fullWidth label='Password'placeholder='Create a password'/>
                    <h5 className={classes.uploadCaption}>Upload a Profile Picture</h5>
                    <input required accept="image/*" type="file"/>
                    <br/>
                    <div className={classes.submitBtn}>
                        <Button type='submit' variant='contained' color='primary'>Create Account</Button>
                    </div>
                </form>
                <Grid align='center'>
                    <Link className={classes.link} component={Link} href='/login'>Already have an account? Click here to log in</Link>
                </Grid>
            </Paper>
        </Grid>
    )
}


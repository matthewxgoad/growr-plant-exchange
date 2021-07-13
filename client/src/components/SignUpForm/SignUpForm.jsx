import React from 'react';
import './SignUpForm.css';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { useState } from "react";

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
  
  const [selectedFile, setSelectedFile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('button clicked')

      const user = {
        name: name,
        email: email,
        address: address,
        password: password,
        image: selectedFile
      };

      console.log(user)

      try {
        console.log('>>>>>making a call<<<<<<<', user)
        await axios.post("http://localhost:3000/api/users/signup", user);
      } catch (err) {
        console.log(err);
      }
  };

    const handleNameInput = (event) =>{
      setName(event.target.value)
    }

    const handleEmailInput = (event) =>{
      setEmail(event.target.value)
    }

    const handleAddressInput = (event) =>{
      setAddress(event.target.value)
    }

    const handlePasswordInput = (event) =>{
      setPassword(event.target.value)
    }

    const handleFileInput = (event) =>{
      setSelectedFile(event.target.files[0])
    }

  return (
      <Grid>
          <Paper elevation={20} className={classes.paper}>
              <Grid align='center'>
                  <h2 className={classes.header}>growr</h2>
                  <h4>Fill out form below to create a new account</h4>
              </Grid>
              <form onSubmit={handleSubmit}>
                  <TextField value={name}
                    onChange={handleNameInput} 
                    required fullWidth label='Username' placeholder='Create a username'/>
                  <TextField 
                    value={email}
                    onChange={handleEmailInput} 
                    required fullWidth label='Email' placeholder='Enter your email'/>
                  <TextField 
                    value={address}
                    onChange={handleAddressInput} 
                    required fullWidth label='Address' placeholder='Enter your address'/>
                  <TextField 
                    value={password}
                    onChange={handlePasswordInput} 
                    type='password' required fullWidth label='Password'placeholder='Create a password'/>
                  <h5 className={classes.uploadCaption}>Upload a Profile Picture</h5>
                  <input 
                    // value={selectedFile}
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"/> 
                  <br/>
                  <div className={classes.submitBtn}>
                    <Button type='submit' variant='contained' color='primary'>
                      Create Account
                    </Button>
                  </div>
              </form>
              <Grid align='center'>
                  <Link className={classes.link} component={Link} href='/login'>
                    Already have an account? Click here to log in
                  </Link>
              </Grid>
          </Paper>
      </Grid>
  )
}


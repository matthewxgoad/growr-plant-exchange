import React from 'react';
import axios from 'axios';
import './AddTradeForm.css';
import { Grid,Paper, TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    paper: {
        padding:'50px 50px', 
        width:300, 
        margin:'20px auto',
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
    inputBox: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    firstInputBox: {
        marginTop: '30px',
        marginBottom: '20px',
    },
  }));

export default function AddTradeForm() { 

  const classes = useStyles(); 

  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [tradeType, setTradeType] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");

  //hard-coded user id
  let loggedInUserData = JSON.parse(localStorage.getItem('user'));
  const creator = loggedInUserData._id;

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData()
      formData.append('title', title);
      formData.append('description', desc);
      formData.append('tradeType', tradeType);
      formData.append('creator', creator);
      formData.append('image', selectedFile);
  
      try {
        
        await axios.post("/api/trades", formData);
      } catch (err) {
        console.log(err);
      }
  }

  const handleTitleInput = (event) =>{
      setTitle(event.target.value)
  }

  const handleDescInput = (event) =>{
      setDesc(event.target.value)
  }

  const handleFileInput = (event) =>{
  setSelectedFile(event.target.files[0])
  }

  //radio button selection
  const handleRadioBtn = (event) => {

    setTradeType(event.target.value);
  };

  return (
    <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset">
                        <h5 className={classes.uploadCaption} style={{marginTop:'30px'}}>Choose a category:</h5>
                        <RadioGroup
                            required
                            style={{display:'initial'}} 
                            aria-label="add-choice"
                            name="add-choice" 
                            value={tradeType} 
                            onChange={handleRadioBtn}>
                              <FormControlLabel value="trade" control={<Radio />} label="Trade" />
                              <FormControlLabel value="request" control={<Radio />} label="Request" />
                              <FormControlLabel value="free" control={<Radio />} label="Free" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField 
                      value={title}
                      onChange={handleTitleInput}
                      fullWidth className={classes.inputBox}
                      size='small'
                      required label='Trade Item Title' placeholder='Trade Item Title'
                    />
                    <br/>
                    <TextField
                      value={desc}
                      onChange={handleDescInput}
                      className={classes.inputBox}
                      id="outlined-multiline-static"
                      label="Description"
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                    />
                    <br/>
                    <h5 className={classes.uploadCaption}>Upload Trade Item Photo</h5>
                    <input 
                      onChange={handleFileInput}
                      encType = 'multipart/form-data'
                      required accept="image/*" type="file"
                      style={{marginBottom:'30px'}}
                    /> 
                    <br/>
                    <div className={classes.submitBtn}>
                        <Button type='submit' variant='contained' color='primary'>
                            Add Trade
                        </Button>
                    </div>
            </form>
        </Paper>
    </Grid>
  )
}

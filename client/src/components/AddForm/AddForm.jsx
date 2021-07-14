import React from 'react';
import './AddForm.css';
import { Grid,Paper, TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import { NightsStaySharp } from '@material-ui/icons';
// import axios from "axios";
// import { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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
    link: {
      textDecoration: "none",
      fontWeight: 'bolder',
    },
  }));

export default function AddForm() {

  const [value, setValue] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState("");


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();


  const handleContinueBtn = async (e) => {
    e.preventDefault();
    console.log('button clicked');
    if (value === 'trade'){
        console.log('trade chosen')
    }
    if (value === 'event') {
        console.log('event chosen')
    }
    if (value==='place') {
        console.log('place chosen')
    }
  }    


  const handleTradeSubmit = async (e) => {
    e.preventDefault();
    console.log(' trade submit button clicked');
  }

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    console.log(' trade submit button clicked');
  }

  const handlePlaceSubmit = async (e) => {
    e.preventDefault();
    console.log(' trade submit button clicked');
  }

  const handleFileInput = (event) =>{
    setSelectedFile(event.target.files[0])
  }


  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
      <>
      <Grid align='center'>
          <Paper elevation={20} className={classes.paper}>
              <Grid align='center'>
                  <h2 className={classes.header}>growr</h2>
                  <h4>What would you like to add?</h4>
              </Grid>
              <form onSubmit={handleContinueBtn}>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="add-choice" name="add-choice" value={value} onChange={handleChange}>
                        <FormControlLabel value="trade" control={<Radio />} label="Trade" />
                        {/* <FormControlLabel value="free" control={<Radio />} label="Free Item" /> */}
                        {/* <FormControlLabel value="request" control={<Radio />} label="Request" /> */}
                        <FormControlLabel value="event" control={<Radio />} label="Event" />
                        <FormControlLabel value="place" control={<Radio />} label="Place" />
                    </RadioGroup>
                  </FormControl>
                  <div className={classes.submitBtn}>
                    <Button type='submit' variant='contained' color='primary'>
                      Continue
                    </Button>
                  </div>
              </form>
          </Paper>
      </Grid>

    {/* Trade Form */}
    <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
                <form onSubmit={handleTradeSubmit}>
                    <FormControl component="fieldset">
                        <RadioGroup style={{display:'initial'}} aria-label="add-choice" name="add-choice" value={value} onChange={handleChange}>
                            <FormControlLabel value="trade" control={<Radio />} label="Trade" />
                            <FormControlLabel value="request" control={<Radio />} label="Request" />
                            <FormControlLabel value="free" control={<Radio />} label="Free" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField 
                        //value={name}
                        //onChange={handleTradeNameInput}
                        variant='outlined' size='small'
                        required label='Trade Item Name' placeholder='Trade Item Name'
                    />
                    <br/>
                    <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={3}
                            variant="outlined"
                            required
                    />
                    <br/>
                    <h5 className={classes.uploadCaption}>Upload Trade Item Photo</h5>
                    <input 
                    // value={selectedFile}
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"/> 
                  <br/>
                    <div className={classes.submitBtn}>
                        <Button type='submit' variant='contained' color='primary'>
                            Add Trade
                        </Button>
                    </div>
            </form>
        </Paper>
    </Grid>

    {/* Event Form */}
    <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
            <form onSubmit={handleEventSubmit}>
                <TextField 
                    //value={name}
                    //onChange={handleTradeNameInput}
                    variant='outlined' size='small'
                    required fullWidth label='Event Name' placeholder='Event Name'/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={2}
                    variant="outlined"
                    required
                />
                <br/>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    variant="outlined"
                    required
                />
                <br/>
                <h5 className={classes.uploadCaption}>Upload Event Photo</h5>
                <input 
                    // value={selectedFile}
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"/> 
                <br/>
                <div className={classes.submitBtn}>
                <Button type='submit' variant='contained' color='primary'>
                    Add Event
                </Button>
                </div>
            </form>
        </Paper>
    </Grid>

    {/* Place Form */}
    <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
            <form onSubmit={handlePlaceSubmit}>
                <TextField 
                    //value={name}
                    //onChange={handleTradeNameInput}
                    variant='outlined' size='small'
                    required label='Place Name' placeholder='Place Name'
                />
                <br/>
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={2}
                    variant="outlined"
                    required
                />
                <br/>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    variant="outlined"
                    required
                />
                <br/>
                <TextField 
                    //value={name}
                    //onChange={handleTradeNameInput}
                    variant='outlined' size='small'
                    required label='Website' placeholder='Website'
                />
                <br/>
                <h5 className={classes.uploadCaption}>Upload Place Photo</h5>
                <input 
                    // value={selectedFile}
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"/> 
                <br/>
                <div className={classes.submitBtn}>
                <Button type='submit' variant='contained' color='primary'>
                    Add Place
                </Button>
                </div>
            </form>
        </Paper>
    </Grid>
</>
  )
}
import React from 'react';
import './AddEventForm.css';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
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
    inputBox: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    firstInputBox: {
        marginTop: '30px',
        marginBottom: '20px',
    },
}));

export default function AddEventForm() {

    const classes = useStyles(); 

    const [selectedFile, setSelectedFile] = React.useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('button clicked')
    }    

    const handleFileInput = (event) =>{
    setSelectedFile(event.target.files[0])
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
    setSelectedDate(date);
    };
    
    return (
        <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField 
                    //value={name}
                    //onChange={handleTradeNameInput}
                    className={classes.firstInputBox}
                    size='small'
                    required fullWidth label='Event Name' placeholder='Event Name'
                />
                <br/>
                <TextField
                    className={classes.inputBox}
                    id="outlined-multiline-static"
                    label="Address"
                    required
                    fullWidth
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                    <h5 className={classes.uploadCaption}>Select a Date:</h5>
                        <KeyboardDatePicker
                            required
                            margin="normal"
                            id="date-picker-dialog"
                            // label="Date"
                            format="cccc LLLL d, yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'}}
                        />
                        <h5 className={classes.uploadCaption}>Select a Time:</h5>
                        <KeyboardTimePicker
                            required
                            margin="normal"
                            id="time-picker"
                            // label="Time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'}}
                            style={{marginBottom:'20px'}}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <TextField
                    className={classes.inputBox}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline fullWidth
                    rows={4}
                    variant="outlined"
                    required
                />
                <br/>
                <h5 className={classes.uploadCaption}>Upload Event Photo</h5>
                <input 
                    // value={selectedFile}
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"
                    style={{marginBottom:'30px'}}
                /> 
                <br/>
                <div className={classes.submitBtn}>
                <Button type='submit' variant='contained' color='primary'>
                    Add Event
                </Button>
                </div>
            </form>
        </Paper>
    </Grid>
  )}
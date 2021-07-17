import React from 'react';
import axios from 'axios';
import './AddEventForm.css';
import { Grid,Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import AddModal from '../AddModal';

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
         }
    },
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

    const [title, setTitle] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState(new Date());
    const [selectedFile, setSelectedFile] = React.useState("");
    const [progress, SetProgress] = React.useState(false);
    const [modalState, setModalState] = React.useState(false);

    let loggedInUserData = JSON.parse(localStorage.getItem('user'));
    const creator = loggedInUserData;
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        SetProgress(true)
    
        const formData = new FormData()
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('address', address);
        formData.append('date', selectedDate);
        formData.append('time', selectedTime);
        formData.append('creator', creator);
        formData.append('image', selectedFile);
    
    
        try {
          await axios.post("/api/events", formData);
        } catch (err) {
          console.log(err);
        }

        setModalState(true);
    }

    const handleTitleInput = (event) =>{
        setTitle(event.target.value)
    }

    const handleDescInput = (event) =>{
        setDesc(event.target.value)
    }

    const handleAddressInput = (event) =>{
        setAddress(event.target.value)
    } 

    const handleFileInput = (event) =>{
    setSelectedFile(event.target.files[0])
    }

    const handleDateChange = (date) => {
    setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        };
    
    return (
        <>
        { (!modalState) ?
        <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField 
                    value={title}
                    onChange={handleTitleInput}
                    className={classes.firstInputBox}
                    size='small'
                    required fullWidth label='Event Title' placeholder='Event Title'
                />
                <br/>
                <TextField
                    value={address}
                    onChange={handleAddressInput}
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
                            value={selectedTime}
                            onChange={handleTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'}}
                            style={{marginBottom:'20px'}}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <TextField
                    value={desc}
                    onChange={handleDescInput}
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
                    onChange={handleFileInput}
                    encType = 'multipart/form-data'
                    required accept="image/*" type="file"
                    style={{marginBottom:'30px'}}
                /> 
                <br/>
                <div className={classes.submitBtn}>
                    <Button type='submit' variant='contained' color='primary'
                        disabled={progress}>
                          { progress ? 
                          (<CircularProgress/>) : 'Add Event'}
                    </Button>
                </div>
            </form>
        </Paper>
    </Grid>
    :
    <AddModal/>
        }
    </>
    )
  }
import React from 'react';
import './AddForm.css';
import AddTradeForm from '../AddTradeForm';
import AddEventForm from '../AddEventForm';
import AddPlaceForm from '../AddPlaceForm';
import { Grid,Paper, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
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
    }
  }));

export default function AddForm() {

  const classes = useStyles();

  const [showAddForm, setShowAddForm] = React.useState(true)
  const [showTradeForm, setShowTradeForm] = React.useState(false);
  const [showEventForm, setShowEventForm] = React.useState(false);
  const [showPlaceForm, setShowPlaceForm] = React.useState(false)
  const [value, setValue] = React.useState('');

  //radio button selection
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //display appropriate form based on user selection
  const handleContinueBtn = async (e) => {
    e.preventDefault();
    if (value === 'trade'){
        setShowAddForm(false);
        setShowTradeForm(true);
    }
    if (value === 'event') {
        setShowAddForm(false);
        setShowEventForm(true);
    }
    if (value==='place') {
        setShowAddForm(false);
        setShowPlaceForm(true)
    }
  }    

  //initial add form with choices
  const AddForm = () => (
    <Grid align='center'>
        <Paper elevation={20} className={classes.paper}>
            <Grid align='center'>
                <h2 className={classes.header}>growr</h2>
                <h4>What would you like to add?</h4>
            </Grid>
            <form onSubmit={handleContinueBtn}>
                <FormControl component="fieldset">
                <RadioGroup aria-label="add-choice" name="add-choice" 
                    value={value} 
                    onChange={handleChange}>
                        <FormControlLabel value="trade" control={<Radio />} label="Trade" />
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
  )

  return (
    <>
      { showAddForm ? <AddForm /> : null }
      { showTradeForm ? <AddTradeForm /> : null }
      { showEventForm ? <AddEventForm /> : null }
      { showPlaceForm ? <AddPlaceForm /> : null }
    </>
  )
}
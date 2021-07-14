import React from 'react';
import './AddPlaceForm.css';
import { Grid,Paper, TextField, Button } from '@material-ui/core';
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

export default function AddPlaceForm() { 

    const classes = useStyles();

    const [selectedFile, setSelectedFile] = React.useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('button clicked')
      }    
    
    const handleFileInput = (event) =>{
    setSelectedFile(event.target.files[0])
    }

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
                        fullWidth size='small'
                        required label='Place Name' placeholder='Place Name'
                    />
                    <br/>
                    <TextField
                        className={classes.inputBox}
                        id="outlined-multiline-static"
                        label="Address"
                        fullWidth
                        required
                    />
                    <br/>
                    <TextField 
                        //value={name}
                        //onChange={handleTradeNameInput}
                        className={classes.inputBox}
                        fullWidth size='small'
                        required label='Website' placeholder='Website'
                    />
                    <br/>
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
                    <h5 className={classes.uploadCaption}>Upload Place Photo</h5>
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
                        Add Place
                    </Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
}
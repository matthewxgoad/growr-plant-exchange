import React from 'react';
import { Grid,Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import green from "@material-ui/core/colors/green";
import AddModal from '../AddModal';
import API from '../../util/API/API';


const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
    paper: {
        padding:'10px', 
        width:300, 
        margin:'auto',
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

    const [title, setTitle] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [selectedFile, setSelectedFile] = React.useState("");
    const [progress, SetProgress] = React.useState(false);
    const [modalState, setModalState] = React.useState(false);

    let loggedInUserData = JSON.parse(localStorage.getItem('user'));
    const creator = loggedInUserData;
  
    // handleSumbit grabs data from form input to push through to post API
    const handleSubmit = async (e) => {
        e.preventDefault();
        SetProgress(true)
    
        const formData = new FormData()
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('address', address);
        formData.append('website', website);
        formData.append('creator', creator);
        formData.append('image', selectedFile);
    
    
        try {
            await API.createPlaces(formData);
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

    const handleWebsiteInput = (event) =>{
        setWebsite(event.target.value)
    } 

    const handleFileInput = (event) =>{
    setSelectedFile(event.target.files[0])
    }

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
                        fullWidth size='small'
                        required label='Place Title' placeholder='Place Title'
                    />
                    <br/>
                    <TextField
                        value={address}
                        onChange={handleAddressInput}
                        className={classes.inputBox}
                        id="outlined-multiline-static"
                        label="Address"
                        fullWidth
                        required
                    />
                    <br/>
                    <TextField 
                        value={website}
                        onChange={handleWebsiteInput}
                        className={classes.inputBox}
                        fullWidth size='small'
                        required label='Website' placeholder='Website'
                    />
                    <br/>
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
                    <h5 className={classes.uploadCaption}>Upload Place Photo</h5>
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
                          (<CircularProgress/>) : 'Add Place'}
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

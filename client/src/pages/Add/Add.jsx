import React from 'react';
import { Container, Box, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import "./Add.css"

const addTypes = [
  {
    value: 'trade',
    label: 'trade',
  },
  {
    value: 'place',
    label: 'place',
  },
  {
    value: 'event',
    label: 'event',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      padding: '5px'
    },
    
  },
}));

export default function Add(props) {

  const classes = useStyles();

  const [addType, setAddType] = React.useState('trade');
  const [description, setDescription] = React.useState('Description');


  const handleChange = (event) => {
    setAddType(event.target.value);
    setDescription(event.target.value);
  };

  return (
    <>
      <NavBar page="add"/>
      <Container>
        <Box>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
          id="outlined-select-add-type"
          select
          label="select"
          value={addType}
          onChange={handleChange}
          helperText="What would you like to add?"
          variant="filled"
        >
          {addTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="outlined-basic" label="title" variant="filled" />
          <div><TextField
          id="multiline-description"
          label="description"
          multiline
          rows={3}
          defaultValue=""
          variant="filled"
        /></div>
          </form>
        </Box>
      </Container>
    </>
  );
}

import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    links: {
        justifyContent: 'space-between', 
        width:300, 
    }
}));

export default function AlertDialog() {
    
  const classes = useStyles(); 

  const [open, setOpen] = React.useState(true);

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <Dialog
        align='center'
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Complete!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            What would you like to do next?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.links}>
          <Link  href="/add">
            Add Again
          </Link>
          <Link  href="/profile">
            View Profile
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

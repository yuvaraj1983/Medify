import React from 'react'

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const AutohideSnackbar = ({message,setOpen, open}) => {
 

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
      };

  return (
    <div>
  
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  </div>
  )
}

export default AutohideSnackbar
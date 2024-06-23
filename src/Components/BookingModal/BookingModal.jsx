import React, { useState } from 'react'
import { Modal, Typography, Box, TextField, Button, Stack} from "@mui/material"
import { json } from 'react-router-dom';
// import { enqueueSnackbar } from 'notistack'

const BookingModal = ({isOpen, setIsOpen, bookingDetails, showSuccessMessage}) => {
    const [email, setEmail] = useState("");

    const closeModal = () => {
        setIsOpen(false)
      }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#EFEFEF',
          borderRadius: '15px'
        },
      };

      const handleBooking = (e) => {
        e.preventDefault();
        const bookings = localStorage.getItem("bookings") || "[]";
        const oldbookings = JSON.parse(bookings);

        localStorage.setItem("bookings",JSON.stringify([...oldbookings, {...bookingDetails, bookingEmail: email }]))
        // enqueueSnackbar("Booking confirmed",{variant: 'success'})
        showSuccessMessage(true);
        setEmail("");
        setIsOpen(false);

      }
  return (
    // <div>
    //      <Modal
    //     isOpen={isOpen}
    //     onRequestClose={closeModal}
    //     style={customStyles}
    //     contentLabel="Example Modal"
    //   >
    //     <Box>

       
    //     <Typography component='h1' variant='h1'>Confirm Booking</Typography>
    //     <Typography>Please enter your email address</Typography>
    //     <TextField placeholder='Enter your email id'></TextField>
    //     <Box>
    //     <Button variant='primary'>Confirm</Button>
    //     <Button variant='secondary'>Cancel</Button>
    //     </Box>
    //     </Box>
       
      
    //   </Modal>
    // </div>

    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
    <Box
      sx={{
        width: "95%",
        maxWidth: 600,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: 24,
        p: { xs: 3, md: 4 },
        outline: 0,
        bgcolor: "#fff",
        borderRadius: 2,
      }}
    >
      <Typography component="h3" variant="h3">
        Confirm booking
      </Typography>
      <Typography fontSize={14} mb={3}>
        <Box component="span">
          Please enter your email to confirm 
        </Box>
     
      </Typography>
      <form onSubmit={handleBooking}>
        <Stack alignItems="flex-start" spacing={2}>
          <TextField
            type="email"
            label="Enter your email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Stack direction="row" spacing={1}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              
            >
              Confirm
            </Button>
            <Button
              variant="outlined"
              size="large"
              disableElevation
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  </Modal>
  )
}

export default BookingModal
import { Box, TextField, Typography, InputAdornment, Button } from '@mui/material'
import React from 'react'

const SMSForm = () => {
  return (
   <Box mb={3} sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"
   }}>
    <Typography color={'#414146'} fontSize={'16px'} fontWeight={700} fontFamily={"Lato"}>
    Get the link to download the app
    </Typography>
    <Box component='form'  sx={{display:'flex',flexDirection:'row' ,gap:2}}>

    
        <TextField 
        sx={{border: "1px solid #F0F0F0", flex:1}}
        
        placeholder='Enter Phone number' 
        InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
        required
        />
        <Button variant='contained'>Send SMS</Button>
    </Box>
   </Box>
  )
}

export default SMSForm
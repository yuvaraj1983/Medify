import { Stack, Typography, Box } from '@mui/material'
import React from 'react'

const DoctorCard = ({img, name, designation}) => {
  return (
   <Box >
        
        <Box component='img' src={img}></Box>
        <Typography textAlign='center' fontSize={24} color="#1B3C74" component='h5' variant='h5'>{name}</Typography>
        <Typography textAlign='center' fontSize={16} color="#2AA7FF" component='h6' variant='h6'>{designation}</Typography>
   </Box>
  )
}

export default DoctorCard
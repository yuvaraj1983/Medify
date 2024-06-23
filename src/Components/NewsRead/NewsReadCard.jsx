import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import newsread from "../../assets/newsread.png";
import newsreadsmall from "../../assets/newsreadsmall.png";
import { BorderLeft, BorderRight } from '@mui/icons-material';
const NewsReadCard = () => {
  return (
    <Box style={{border: '1px solid #00000012', BorderLeft:'10px', BorderRight:'10px'}}>
            <Box component={'img'} src={newsread}></Box>
            <Box  p={2}>
                <Typography color={'#77829D'}>Medical March 31, 2022</Typography>
                <Typography fontWeight={'500'} color={'#1B3C74'}>6 Tips To Protect Your Mental Health When You’re Sick</Typography>
            </Box>
            <Stack direction={'row'}>
                <Box component={'img'} src={newsreadsmall}></Box>
                <Typography color={'#1B3C74'}>Rebecca Lee</Typography>
            </Stack>
       
    </Box>
  )
}

export default NewsReadCard
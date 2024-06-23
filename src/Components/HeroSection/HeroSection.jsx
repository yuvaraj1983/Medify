import { Box, Button, Stack, Typography, Link } from '@mui/material'
import React from 'react';
import heroimg from "../../assets/hero_image.png"

const HeroSection = () => {
  return (
    <Stack pt={1} direction='row' spacing={1} justifyContent='center' alignItems='center'>
        <Box>
            <Typography variant='h3' component='h3'>
                Skip the travel! Find Online
            </Typography>
            <Typography variant='h1' component='h1'>
                Medical <span style={{color:'#2AA7FF'}}>Centers</span> 
            </Typography>
            <Typography>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor. </Typography>
           <Link to='/search'>
           <Button variant='contained'>Find Centers</Button>
           </Link>
            
        </Box>
        {/* <Box width={'50%'} >
            <img src={heroimg} alt="No Hero Image found" />
        </Box> */}
        <Box component={'img'} src={heroimg} width={'50%'}>

        </Box>
    </Stack>
  )
}

export default HeroSection
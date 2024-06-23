import { Box, Grid, Container, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import mobile from "../../assets/mobile.jpg"
import vector from "../../assets/Vector.png"
import SMSForm from "../SMSForm/SMSForm";
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

const DownloadApp = () => {
  return (
  <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"
  }}>

    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid  item md={6}>
          <Box component={'img'} src={mobile} width={1} height='auto'></Box>
        </Grid>
        <Grid item md={6}>
          <Box  position="relative" pl="50px" mb={0}>
          <Typography variant='h2'>
          Download the 
          <br />
          <Box color={'#2AA7FF'} component={'span'}>
          Medify
          </Box>
          <span>App</span>

          </Typography>

          <Box component='img' src={vector} position='absolute'  width={40} top={50}  left={0}>

          </Box>
          <SMSForm />
          <Stack spacing={2} direction='row' justifyContent='center'>

        
          <Button sx={{bgcolor:'black', color:'white'}} 
          startIcon={<ShopIcon />}
          >Google Play</Button>
          <Button sx={{bgcolor:'black', color:'white'}}  
          startIcon={<AppleIcon />}>Apple Store</Button>
          </Stack> 
          </Box>
        </Grid>
      </Grid>
    </Container>
   
       
  </Box>
  )
}

export default DownloadApp
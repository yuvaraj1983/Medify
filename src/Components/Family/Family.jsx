import { Grid, Typography, Box, Container } from '@mui/material'
import React from 'react'
import familyimg from '../../assets/familyimg.png'

const Family = () => {
  return (
    <Box m={6} sx={{  background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}}
>

    <Container>
    <Grid container alignItems={'center'}>
    <Grid item md={6}>
        <Typography component={'h6'} variant='h6' textAlign={'center'} color={'#2AA7FF'}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
        <Typography component={'h1'} variant='h1' lineHeight={'67px'} textAlign={'center'} color={'#1B3C74'}>Our Families</Typography>
        <Typography component={'h6'} variant='h6' lineHeight={'40.8px'} color={'#77829D'}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</Typography>
    </Grid>
    <Grid item  md={6}>
        <Box component='img' src={familyimg} width={1}></Box>
    </Grid>
   </Grid>
    </Container>
  
   </Box>
  )
}

export default Family
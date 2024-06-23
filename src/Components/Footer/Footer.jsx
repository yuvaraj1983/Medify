import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import footer from "../../assets/foooter.png"
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import socialmedia from "../../assets/socialmedia.png"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <Box my={6} sx={{bgcolor:"#1B3C74", color:'white'}}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Stack  direction={'column'} alignItems={'flex-start'} justifyContent={'space-between'}  height={1} spacing={2}>
              <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'} }>
                <Box component='img' src={logo}></Box>
                <Typography textAlign='left' color='#2AA8FF' fontSize={18}>Medify</Typography>
              </Box>
            
              <Box >
                <Stack spacing={3}  direction={'row'} alignItems={'center'} justifyContent={'center'}  >
                  <Box component='img' src={facebook}></Box>
                  <Box component='img' src={twitter}></Box>
                  <Box component='img' src={youtube}></Box>
                  <Box component='img' src={socialmedia}></Box>
                </Stack>
              </Box>
             
            </Stack>
            
          </Grid>
          <Grid item md={2}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Galary</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Private Policy</FooterLink>
            </Stack>
          </Grid>
          <Grid item md={2}>
            <Stack spacing={2}>
            <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
        

          </Grid>
          <Grid item md={2}>
            <Stack spacing={2}>
            <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Galary</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Private Policy</FooterLink>
            </Stack>
        

          </Grid>
        </Grid>
        <Typography mt={5} pt={4} sx={{"border-top": "1px solid #FFFFFF1A"}}>
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
     
    </Box>
  )
}

export default Footer
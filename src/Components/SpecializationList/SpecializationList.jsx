import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import CardService from '../CardService/CardService'
import Dentistry from "../../assets/Dentistry.png";
import PrimaryCare from "../../assets/primarycare.png";
import Cardiology from "../../assets/Cardiology.png";
import MRI from "../../assets/MRI.png";
import BloodTest from "../../assets/BloodTest.png";
import Piscologist from "../../assets/Piscologist.png";
import Laboratory from "../../assets/laboratory.png";
import XRay from "../../assets/xray.png";

const SpecializationList = () => {

    const specializationlist = [
        {img: Dentistry, name: "Dentistry" },
        {img: PrimaryCare, name: "Primary Care" },
        {img: Cardiology, name: "Cardiology" },
        {img: MRI, name: "MRI Resonance" },
        {img: BloodTest, name: "Blood Test" },
        {img: Piscologist, name: "Piscologist" },
        {img: Laboratory, name: "Laboratory" },
        {img: XRay, name: "X-Ray" },
    ]
  return (
    <Box 
    //sx={{background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47), 89.11%)" }}
    sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47), 89.11%)" }}
    >
        <Container sx={{textAlign:'center'}}>
            <Typography variant='h3' my={3} component='h3' textAlign='center' color="#1B3C74" fontWeight={600}>
                Find by Specialization
            </Typography>
            <Grid container spacing={3} mb={4}>
                {
                    specializationlist.map((item) => (
                        <Grid item md={3}>
                            <CardService  img={item.img} name={item.name}  />
                        </Grid>
                    ))
                }
            </Grid>
            <Button  variant='contained'>View All</Button>
        </Container>
    </Box>
  )
}

export default SpecializationList
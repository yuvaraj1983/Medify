import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import doctor from "../../assets/doctor.png";
import lab from "../../assets/lab.png";
import Hospital from "../../assets/Hospital.png";
import Capsule from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import CardService from "../CardService/CardService"

const CardServices = () => {

    const services = [
        {img:doctor, name: "Doctors" },
        {img:lab, name: "Labs" },
        {img:Hospital, name: "Hospital", isactive: true },
        {img:Capsule, name: "Medical Stores" },
        {img:Ambulance, name: "Ambulance" },
    ]
  return (
   <Box>
    <Typography component='h5' variant='h5' textAlign='center' my={4}>
        You may be looking for
    </Typography>
        <Grid container spacing={2} justifyContent='space-around' alignItems='center'>
        {
            services.map((service) => (
                <Grid item spacing={5}>
                    <CardService img={service.img} name={service.name} isactive={service.isactive} />
                </Grid>
               
            ))
        }
    </Grid>
   </Box>
  )
}

export default CardServices
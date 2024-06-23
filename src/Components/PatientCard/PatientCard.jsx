import { Box, Stack, Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material'
import React from 'react'
import patientcare from "../../assets/patientcare.png";
import tick from "../../assets/tick.png";
import { Margin } from '@mui/icons-material';

const PatientCard = () => {
  return (
   <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"
   }}>
    <container>
    <Grid container spacing={6}  alignItems={'center'}>
        <Grid item md={6} >
        <Box component='img' src={patientcare}  width={1}></Box>
        </Grid>
        <Grid item  md={6}>
        <Typography fontSize={'16px'} component='h6' variant='h6' color="#2AA7FF">HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
            <Typography fontWeight={'600'} fontSize={'48px'} >Patient <span style={{color:"#2AA7FF"}}>Caring</span> </Typography>
            <Typography fontSize={'16px'} fontWeight={'500'} color={"#77829D"}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</Typography>

            <List >
                <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                <Box  component='img' src={tick}></Box>
                </ListItemIcon>
                  
                    <ListItemText primary="Stay Updated About Your Health"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box component='img' src={tick}></Box>
                    </ListItemIcon>
                   
                    <ListItemText primary="Check Your Results Online"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <Box component='img' src={tick}></Box>
                    </ListItemIcon>
                    <ListItemText primary="Manage Your Appointments"  />
                </ListItem>
            </List>
        </Grid>
    </Grid>
    </container>
  
    {/* <Stack direction='row' justifyContent='center' alignItems='center' spacing={3}>
            <Box component='img' src={patientcare}></Box>
        <Stack direction='column' justifyContent='center' alignItems='center'>
            <Typography fontSize={'16px'} component='h6' variant='h6' color="#2AA7FF">HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
            <Typography fontWeight={'600'} fontSize={'48px'} >Patient <span style={{color:"#2AA7FF"}}>Caring</span> </Typography>
            <Typography fontSize={'16px'} fontWeight={'500'} color={"#77829D"}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</Typography>

            <List >
                <ListItem>
                <ListItemIcon sx={{ minWidth: 32 }}>
                <Box  component='img' src={tick}></Box>
                </ListItemIcon>
                  
                    <ListItemText primary="Stay Updated About Your Health"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box component='img' src={tick}></Box>
                    </ListItemIcon>
                   
                    <ListItemText primary="Check Your Results Online"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <Box component='img' src={tick}></Box>
                    </ListItemIcon>
                    <ListItemText primary="Manage Your Appointments"  />
                </ListItem>
            </List>
         
           
          
        </Stack>
    </Stack> */}
   </Box>
  )
}

export default PatientCard
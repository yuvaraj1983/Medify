import React from 'react'
import {Box, Typography, Container, Stack, Link, ListItem, Button} from "@mui/material";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header>
    <Box>
        <Typography sx={{bgcolor:"#2AA7FF"}} fontSize={14} color="#FFFFFF" textAlign='center'>
      The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
      </Typography>

    </Box>
    <Container>
      
        <Stack direction='row' justifyContent='space-between' alignItems='center' py={2}>
            <Stack direction='row' alignItems='center' spacing={1} mt={1}>
                    <Link>
                        <img src={logo} alt="no logo found" /> 
                    </Link>
                    <Typography textAlign='left' color='#2AA8FF' fontSize={18}>Medify</Typography>
            </Stack>
           <Stack className={styles.navbar} direction='row' justifyContent='center' alignItems='center' spacing={2}>
                <Link>Find Doctors</Link>
                <Link>Hospitals</Link>
                <Link>Medicines</Link>
                <Link>Surgeries</Link>
                <Link>Software for Provider</Link>
                <Link>Facilities</Link>
                <a href="/my-bookings">
                 <Button variant='contained' disableElevation >My Bookings</Button>
                </a>
           </Stack>
        </Stack>
       
    </Container>
    </header>
  
  )
}

export default Navbar
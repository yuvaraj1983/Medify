import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Stack } from "@mui/material"
import Navbar from '../Components/Navbar/Navbar'
import SearchBar from "../Components/SearchBar/SearchBar"
import HospitalCard from "../Components/HospitalCard/HospitalCard"
import cta from "../assets/cta.png";
import DownloadApp from '../Components/DownloadApp/DownloadApp'
import Footer from '../Components/Footer/Footer'

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const localBookings = localStorage.getItem("bookings") || "[]";
    setBookings(JSON.parse(localBookings));

  },[])

  useEffect(() => {
    setFilteredBookings(bookings);
  },[bookings])


  return (
    <>
     <Navbar />
     <Box  sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}>

        <Box  mb="50px" pt={1}
            sx={{position: "relative",
                background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
                borderBottomLeftRadius:"1rem",
                borderBottomRightRadius:"1rem"
                
        }}>
                 <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
  

                 <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
  <Typography pb={1}  fontSize={40} color="#fff">My Bookings</Typography>
  <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
        <SearchBar list={bookings} filterList={setFilteredBookings}/>
  </Box>
            </Stack>

      
        
    </Container>
            
        </Box>

        <Container   sx={{pt:8, background:'linear-gradient(#EFF5FE, rgba(241,247,255,0.47))'}}>
        <Stack direction={'row'} alignItems={'flex-start'}>
                <Stack   mb={{ xs: 4, md: 0 }}
                spacing={3}
                width={{ xs: 1, md: "calc(100% - 384px)" }}
                mr="24px">
                    { filteredBookings.length > 0 &&
                        filteredBookings.map((hospital) =>(
                                <HospitalCard key={hospital["Hospital Name"]} details={hospital} 
                                booking={true}  />
                    ))
                    }

                {filteredBookings.length === 0 && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No Bookings Found!
                </Typography>
              )}        
                 </Stack>
                 <Box width={360} height='auto' component={'img'} src={cta}>

                    </Box>
            </Stack>
            <DownloadApp />
            <Footer />
        </Container>

    </Box>

    </>
  )
}

export default MyBookings
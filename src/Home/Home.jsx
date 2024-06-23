import React from 'react'
import {Box, Container, Stack, Typography} from '@mui/material'
import Navbar from "../Components/Navbar/Navbar"
import HeroSection from "../Components/HeroSection/HeroSection"
import SearchHospital from "../Components/SearchHospital/SearchHospital"
import CardServices from "../Components/CardServices/CardServices";
import Discounts from '../Components/Discounts/Discounts'
import SpecializationList from '../Components/SpecializationList/SpecializationList'
import DoctorsList from '../Components/DoctorsList/DoctorsList'
import PatientCard from "../Components/PatientCard/PatientCard"
import NewsRead from '../Components/NewsRead/NewsRead'
import Family from '../Components/Family/Family'
import Questions from '../Components/Questions/Questions'
import DownloadApp from '../Components/DownloadApp/DownloadApp'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <Box sx={{background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 89.11%)"
    }}>
      <Box>
      <Navbar />
      <Container>
        <HeroSection />
        <Stack   zIndex={99}  
        mt={-15}
        p={2} position='relative'  spacing={2}  boxShadow="0 0 12px rgba(0,0,0,0.1)">
          <SearchHospital />
          <CardServices />
        
        </Stack>
     </Container>
   
      </Box>
      <Discounts />
     <SpecializationList />
     <DoctorsList />
     <PatientCard />
     <NewsRead />
     <Family />
     <Questions />
     <DownloadApp />
      <Footer />
    </Box>
   
  )
}

export default Home
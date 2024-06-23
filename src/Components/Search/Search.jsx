import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearchHospital from '../SearchHospital/SearchHospital'
import { Container, Box, Typography, Stack } from "@mui/material"
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import tick from "../../assets/tick.png";
import HospitalCard from '../HospitalCard/HospitalCard'
import cta from "../../assets/cta.png";
import BookingModal from '../BookingModal/BookingModal'
import AutohideSnackbar from '../AutohideSnackbar/AutohideSnackbar'
import Questions from '../Questions/Questions'
import DownloadApp from '../DownloadApp/DownloadApp'
import Footer from '../Footer/Footer'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [state, setState] = useState(searchParams.get("state"));
    const [city, setCity] = useState(searchParams.get("city"));
    const [hospitals, setHospitals] = useState([]);
    const [isOpen,setIsOpen] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingSuccess, setShowBookingSuccess] = useState(false)
    const [availableslots, setavailableslots] = useState({
        morning: ["11:30 AM"],
        afternoon:["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening:["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
    });
    // const availableslots = {
    //     morning: ["11:30 AM"],
    //     afternoon:["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    //     evening:["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
    // }
console.log('availableslots search', availableslots)
    useEffect(() => {
        const searchHospital = async () => {
            try {
                const url=` https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
                const response = await axios.get(url);
                setHospitals(response.data);


            } catch(err) {
                console.log(err);
            }
        }
        searchHospital();
    },[state,city])

    useEffect(() => {
        setState(searchParams.get("state"))
        setCity(searchParams.get("city"))
    },[searchParams])

    const handleBookingModal = (details) => {
        console.log("handleBookingModal");
        setBookingDetails(details)
        setIsOpen(true);
    }
  return (
    <>
      <Navbar />
        <Box  sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}>

        
       <Box 
       sx={{position: "relative",background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
        borderBottomLeftRadius:"1rem",
        borderBottomRightRadius:"1rem"
        
}}> 
<Container  maxWidth="xl"
sx={{background:'white',  p: 3,  borderRadius: 2,transform: "translatey(50px)", mb: "50px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      
}}

>
<SearchHospital />
</Container>


       </Box>
       
      {/* <Container  maxWidth="xl"  sx={{pt:8, background:'linear-gradient(#EFF5FE, rgba(241,247,255,0.47))'}}>
            <Box sx={{mb:3}}
            
            >
                <Typography  component="h1" color={'black'}
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500} >
                { `${hospitals.length} medical centers available in ${city} `}
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Box component='img' src={tick} width={24} height={24}>
                    </Box>
                    <Typography lineHeight={'24px'} fontSize={'16px'} fontWeight={'400'} fontFamily={'Poppins'} color={'#787887'}>
                    Book appointments with minimum wait-time & verified doctor details
                    </Typography>
                </Stack>
                
            </Box>
            <Stack direction={'row'} alignItems={'flex-start'}>
                <Stack   mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px">

               
                    { hospitals.length > 0 &&
                        hospitals.map((hospital) =>(
                            <HospitalCard key={hospital["Hospital Name"]} details={hospital} availableslots={availableslots} />
                        ))
                    }
                    </Stack>
                    <Box width={360} height='auto' component={'img'} src={cta}>

                    </Box>
            </Stack>
            
      </Container> */}
       <Container   sx={{pt:8, background:'linear-gradient(#EFF5FE, rgba(241,247,255,0.47))'}}>

       <Box sx={{mb:3}}>
              <Typography  component="h1" color={'black'}
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500} >
              { `${hospitals.length} medical centers available in ${city} `}
              </Typography>
              <Stack direction='row' spacing={2}>
                    <Box component='img' src={tick} width={24} height={24}>
                    </Box>
                    <Typography lineHeight={'24px'} fontSize={'16px'} fontWeight={'400'} fontFamily={'Poppins'} color={'#787887'}>
                    Book appointments with minimum wait-time & verified doctor details
                    </Typography>
                </Stack>
            </Box>
            <Stack direction={'row'} alignItems={'flex-start'}>
                <Stack   mb={{ xs: 4, md: 0 }}
                spacing={3}
                width={{ xs: 1, md: "calc(100% - 384px)" }}
                mr="24px">
                    { hospitals.length > 0 &&
                                            hospitals.map((hospital) =>(
                                                <HospitalCard key={hospital["Hospital Name"]} details={hospital} availableslots={availableslots}
                                                handleBooking={handleBookingModal} />
                                            ))
                                        }
                 </Stack>
                 <Box width={360} height='auto' component={'img'} src={cta}>

                    </Box>
            </Stack>
            <Questions />
     <DownloadApp />
      <Footer />

       </Container>
  
      </Box>

      <BookingModal isOpen={isOpen} setIsOpen={setIsOpen} bookingDetails={bookingDetails}  showSuccessMessage={setShowBookingSuccess}/>
      
         <AutohideSnackbar message="Booking confirmed"   open={showBookingSuccess}
          setOpen={setShowBookingSuccess} />                               
   
    </>

   
  )
}

export default Search
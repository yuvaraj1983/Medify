import { Box, Button, Divider, Stack, Typography, Chip } from '@mui/material'
import {format} from "date-fns"
import React, { useState } from 'react'
import hospitalcenter from "../../assets/hospitalcenter.png"
import { Margin } from '@mui/icons-material'
import thumbsup from "../../assets/thumbsup.png";
import Calendar from '../Calendar/Calendar';

const HospitalCard = ({details, availableslots, handleBooking, booking = false}) => {
    console.log(details)
    console.log("hospital card", availableslots)
    const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
{/*    
<Box sx={{borderRadius: 2, bgcolor:'#fff', p: 4, m:'10px'}} > 
    <Stack spacing={4} direction={'row'} alignItems={'center'} justifyContent={'flex-start'} bgcolor={'#FFFFFF'}>
        <Box component='img' src={hospitalcenter} width={'130px'} height='auto'></Box>
        <Box flex={1}>
            <Typography textTransform="capitalize"
            color={'#14BEF0'} fontSize={'20px'} fontWeight={'600'}
            fontFamily={'Poppins'}
            >{details["Hospital Name"].toLowerCase()}</Typography>
            <Typography textTransform={'capitalize'}
             color={'#414146'} fontSize={'14px'} fontWeight={'700'}
             fontFamily={'Poppins'}
            >{details["City"].toLowerCase()}</Typography>
            <Typography  textTransform={'capitalize'}
             color={'#414146'} fontSize={'14px'} fontWeight={'400'}
             fontFamily={'Poppins'}
            >{details["Hospital Type"].toLowerCase()}</Typography>
            <Stack direction={'row'} spacing={4} mb={2}>
                <Typography color={'#02A401'} fontSize={'14px'} fontWeight={'700'}
                    fontFamily={'Poppins'} textTransform={'uppercase'} lineHeight={'19.6px'}>
                    Free
                </Typography>
                <Typography sx={{textDecoration:"line-through"}} color={'#787887'} fontSize={'14px'} fontWeight={'400'}
                    fontFamily={'Poppins'} textTransform={'uppercase'}>
                     ₹500
                </Typography>
                <Typography color={'#414146'} fontSize={'14px'} fontWeight={'400'}
                    fontFamily={'Poppins'} >
                     Consultation fee at clinic
                </Typography>
            </Stack>
            <Divider sx={{borderStyle:'dashed',mb: 2}}></Divider>
            <Stack spacing="4px" bgcolor={'#00A500'} direction={'row'} width={'fit-content'}
            p={1}
            borderRadius={1}
            >
                <Box component={'img'} src={thumbsup} sx={{color:'#00A500'}}>
                </Box>
                <Typography sx={{ opacity: 0.5 }} b >
                        {details["Hospital overall rating"]}
                </Typography>
            </Stack>
            
        </Box>
        <Stack direction={'column'} justifyContent='flex-start' alignItems={'center'}  minWidth="23%">
                <>
                <Typography fontFamily={'Poppins'} lineHeight={'19.6px'} fontWeight={'500'} color={'#01A400'}  textAlign="center">Available Today</Typography>
                <Button onClick={() => setShowCalendar((prevvalue) => !prevvalue) } variant='contained'>Book FREE Center Visit</Button>
                </>
               
            </Stack>
    </Stack>
   
</Box>
<Box sx={{border:'1px solid blue'}}>
{
        showCalendar && <Calendar details={details}  availableslots={availableslots} />
    }
</Box> */}

<Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap={"wrap"}
      >
        <Box
          component="img"
          src={hospitalcenter}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={thumbsup}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

       
        <Stack
          justifyContent={"flex-end"}
          minWidth="23%"
        >
          { !booking &&        
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
           
            </>
           }

{booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
            </Stack>
          )}
       
        
        </Stack>
      </Stack>

      {showCalendar && (
        <Calendar
          details={details}
          availableslots={availableslots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
</>
  )

}

export default HospitalCard
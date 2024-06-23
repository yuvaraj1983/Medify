import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import doctor1 from "../../assets/doctor1.png"
import doctor2 from "../../assets/doctor2.png"
import doctor3 from "../../assets/doctor3.png"
import doctor4 from "../../assets/doctor4.png"
import doctor5 from "../../assets/doctor5.png"

import DoctorCard from './DoctorCard'
import { Autoplay, Pagination } from 'swiper/modules';

const DoctorsList = () => {

    const doctors = [
        {img: doctor1, name: "Dr. Lesley Hull", designation:"Medicine"},
        {img: doctor2, name: "Dr. Ahmad Khan", designation:"Neurologist"},
        {img: doctor3, name: "Dr. Heena Sachdeva", designation:"Orthopadics"},
        {img: doctor4, name: "Dr. Ankur Sharma", designation:"Medicine"},
        {img: doctor5, name: "Dr. Ahmad Stevens", designation:"Neurologist"},
        {img: doctor1, name: "Dr. Lesley Hull", designation:"Medicine"},
        {img: doctor2, name: "Dr. Ahmad Khan", designation:"Neurologist"},
        {img: doctor3, name: "Dr. Heena Sachdeva", designation:"Orthopadics"},
        {img: doctor4, name: "Dr. Ankur Sharma", designation:"Medicine"},
        {img: doctor5, name: "Dr. Ahmad Stevens", designation:"Neurologist"},
    ]
  return (
    <Box py={4} >
         <Container  maxWidth='xl'>
            <Typography variant="h3" component='h3' textAlign='center' mb={3} px={2} color="#1B3C74" fontWeight={600}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
               
                // centeredSlides={true}
              
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
               
            >
                {doctors.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <DoctorCard
                            img={doc.img}
                            name={doc.name}
                            designation={doc.designation} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </Container>
        </Box>
  )
}

export default DoctorsList
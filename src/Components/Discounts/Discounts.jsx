import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Container } from '@mui/material';
import discount1 from "../../assets/discount1.png"
import discount2 from "../../assets/discount2.png"


const Discounts = () => {
  return (
    <Box py={12}>
    <Container  maxWidth='xl'>
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      
      pagination={{ clickable: true }}
      
    
    >
      <SwiperSlide>
        <Box component='img' src={discount1}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box component='img' src={discount2}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box component='img' src={discount1}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box component='img' src={discount2}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box component='img' src={discount1}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box component='img' src={discount2}></Box>
      </SwiperSlide>
    
     
    </Swiper>
    </Container>
    </Box>
   
  )
}

export default Discounts
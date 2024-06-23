import React from 'react'
import {Stack, Typography, Box} from "@mui/material"
import { add, format, startOfDay, isEqual } from 'date-fns'
import { Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideNextButton, SlidePrevButton } from './SliderButtons';
// Import Swiper styles
import 'swiper/css';

import { Virtual } from 'swiper/modules';
import styles from "./DaySelector.module.css"

const DaySelector = ({totalSlots, selectedDate, setSelectedDate}) => {
    console.log('totalSlots', totalSlots)
    const date = startOfDay(new Date());
    const dateItems = [];
    for(let i=0;i<7;i++) {
        dateItems.push(add(date,{days: i}));
    }
    console.log(dateItems);

    const customDateFormat = (day) => {
        if (isEqual(date, day)) {
            return 'Today'
        }
        else if (isEqual(date, add(day, { days: -1 }))) {
            return 'Tomorrow'
        } else
            return format(day,'E d LLL')
    }

    const handleClick = (day) => {
        setSelectedDate(day)
    }
  return (
    // <Stack pt={3} position='relative' direction={'row'} alignItems={'flex-end'} justifyContent={'space-evenly'}> 
    //     <Divider   sx={{ mb: 3 }}/>
        
    //     <Swiper   spaceBetween={15} slidesPerView={3}   loop={false} >
    //     <span slot="container-start" >
    //                 <Box display={'block'} width={'10px'}>
    //                     <SlidePrevButton />
    //                 </Box>
    //     </span>
    //         {dateItems.map((day, index) => (
    //             <SwiperSlide  textAlign='center' key={day} >
    //                 <Stack padding={'10px'}  sx={{ cursor: 'pointer' }}>
    //                 <Typography
                               
    //                             fontSize={{ xs: 11, md: 16 }}
    //                         >
    //                             {customDateFormat(day)}
    //                         </Typography>
    //                         <Typography fontSize={{ xs: 8, md: 12 }} >
    //                             {`${totalSlots} Slots Available`}
    //                         </Typography>
    //                 </Stack>
    //                 <Box
    //                             height={{ xs: '4px', md: '5px' }}
                               
    //                             position='relative'
    //                             bottom='0'
    //                             bgcolor={ 'rgba(0,0,0,0)'}
    //                             left={0}
    //                             zIndex={999}
    //                             mt='5px'
    //                             mx='auto'
    //                         >
    //                         </Box>
    //             </SwiperSlide>
    //         ))}
              
    //             <span slot="container-end">
    //                 <Box display={'block'}>
    //                     <SlideNextButton />
    //                 </Box>
    //             </span>
                
    //     </Swiper>
    // </Stack>

    <Stack pt={3} position='relative'>
    <Divider sx={{ mb: 3 }} />
    <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        className={styles.swiperStyles}
        breakpoints={{
            767: {
                spaceBetween: 30,
                slidesPerView: 3
            }
        }}
    >
        {dateItems.map((day, index) => (
            <SwiperSlide key={index} className={styles.swiperslide}>
                <Stack
                    textAlign='center'
                    onClick={() => handleClick(day)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography
                        fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                        fontSize={{ xs: 11, md: 16 }}
                    >
                        {customDateFormat(day)}
                    </Typography>
                    <Typography fontSize={{ xs: 8, md: 12 }} color='primary.green'>
                        {`${totalSlots} Slots Available`}
                    </Typography>

                    <Box
                        height={{ xs: '4px', md: '5px' }}
                        width={{ xs: 1, md: 'calc(100% - 50px)' }}
                        position='relative'
                        bottom='0'
                        bgcolor={isEqual(day, selectedDate) ? 'primary.main' : 'rgba(0,0,0,0)'}
                        left={0}
                        zIndex={999}
                        mt='5px'
                        mx='auto'
                    >
                    </Box>

                </Stack>
            </SwiperSlide>
        ))}

        <span slot="container-start">
            <Box display={{ xs: 'none', md: 'block' }}>
                <SlidePrevButton />
            </Box>
        </span>

        <span slot="container-end">
            <Box display={{ xs: 'none', md: 'block' }}>
                <SlideNextButton />
            </Box>
        </span>
    </Swiper>

    <Box
        height={{ xs: '4px', md: '5px' }}
        width={{ xs: 1, md: 'calc(100% - 150px)' }}
        bgcolor='#F0F0F5'
        mt='5px'
        position='absolute'
        bottom={0}
        left='50%'
        sx={{ translate: '-50% 0' }}
    ></Box>

</Stack>
  )
}

export default DaySelector
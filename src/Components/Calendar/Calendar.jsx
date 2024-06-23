import { Box } from '@mui/material'
import React, { useState } from 'react'
import { startOfDay } from 'date-fns'
import DaySelector from './DaySelector/DaySelector'
import TimeSlotPicker from './TimeSlotPicker/TimeSlotPicker'

const Calendar = ({details, availableslots, handleBooking}) => {
  

    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
    console.log('Calendar availableslots', availableslots)
    const totalSlots = availableslots.morning.length + availableslots.afternoon.length + availableslots.evening.length 
  return (
   <Box >
    <DaySelector selectedDate={selectedDate} setSelectedDate={setSelectedDate}
    availableslots={availableslots} totalSlots={totalSlots}/>

    <TimeSlotPicker  availableslots={availableslots} selectedDate={selectedDate}    details={details}
    handleBooking={handleBooking} />

   </Box>
  )
}

export default Calendar
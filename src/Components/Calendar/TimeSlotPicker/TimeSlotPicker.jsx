import { Stack, Typography, Chip, Divider } from '@mui/material'
import React from 'react'



const TimeSlotPicker = ({handleBooking, availableslots, details, selectedDate}) => {
    console.log('time picker', availableslots)
    
    const handleClick = (slot) => {
        console.log("handleClick")
        handleBooking({...details, bookingDate: selectedDate, bookingTime: slot})
    }

    const CustomChip = (props) => (
        <Chip
          label={props.label}
          color="primary"
          variant="outlined"
          sx={{
            borderRadius: "5px",
            fontSize: { xs: 10, md: 14 },
            cursor: "pointer",
            "&:nth-of-type(1)": {
              ml: 0,
            },
            mr: { xs: 1, md: 3 },
            mt: { xs: 1, md: 0 },
          }}
          onClick={props.handleClick}
        />
      );

  return (
    <Stack  pt={3} spacing={{ xs: 2, md: 3 }}
    divider={<Divider orientation="horizontal" flexItem />}
    >
        {availableslots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
        //   px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {availableslots.morning.map((slot) => (
                // <Chip    label={slot}
                // color="primary"
                // variant="outlined"
                // sx={{
                //     borderRadius: "5px",
                //     fontSize: { xs: 10, md: 14 },
                //     cursor: "pointer",
                //     "&:nth-of-type(1)": {
                //     ml: 1,
                //     },
                //     mr: { xs: 1, md: 3 },
                //     mt: { xs: 1, md: 0 },
                // }}
                // onClick={handleClick}
                // />
                <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />

          ))}
        </Stack>
      )}

    {availableslots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
        //   px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {availableslots.afternoon.map((slot) => (
                // <Chip    label={slot}
                // color="primary"
                // variant="outlined"
                // sx={{
                //     borderRadius: "5px",
                //     fontSize: { xs: 10, md: 14 },
                //     cursor: "pointer",
                //     "&:nth-of-type(1)": {
                //     ml: 1,
                //     },
                //     mr: { xs: 1, md: 3 },
                //     mt: { xs: 1, md: 0 },
                // }}
                // />

                <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />

          ))}
        </Stack>
      )}

{availableslots.evening.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
        //   px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {availableslots.evening.map((slot) => (
                <Chip    label={slot}
                color="primary"
                variant="outlined"
                sx={{
                    borderRadius: "5px",
                    fontSize: { xs: 10, md: 14 },
                    cursor: "pointer",
                    "&:nth-of-type(1)": {
                    ml: 1,
                    },
                    mr: { xs: 1, md: 3 },
                    mt: { xs: 1, md: 0 },
                }}
                />

          ))}
        </Stack>
      )}
       
    </Stack>
  )
}

export default TimeSlotPicker
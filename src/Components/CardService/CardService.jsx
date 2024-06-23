import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CardService = ({img,name, isactive}) => {
  return (
  <Stack spacing={3}  borderRadius={2}  px={5} py={2} justifyContent='space-between' alignItems='center'
  border={isactive ?"2px solid #2AA7FF": "#FFFFFF"} color={isactive? "#2AA7FF":"#FFFFFF"}
  bgcolor={isactive?"#F0F0F0":"#FFFFFF" }
  >
        <Box component="img" src={img} width='60px' height='60px'
        >
        </Box>
        <Typography color="#ABB6C7">{name}</Typography>
  </Stack>
  )
}

export default CardService
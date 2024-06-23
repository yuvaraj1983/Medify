import React from 'react'

import { Stack, Typography, Box, Grid, Container } from '@mui/material';
import NewsReadCard from "../../Components/NewsRead/NewsReadCard"
const NewsRead = () => {
  return (
    <Box >
        <Container>

       
        <Stack textAlign={'center'} direction='column' justifyContent={'center'} alignSelf={'center'}>
                <Typography fontSize={'16px'} color={'#2AA7FF'} component={'h6'} variant='h6'>Blog & News</Typography>
                <Typography  fontWeight={'600'} color={'#1B3C74'} component={'h2'} variant='h2'>Read Our Latest News</Typography>
      
       
        </Stack>
        <Grid container spacing={4}>
            <Grid item md={4}>
                
                <NewsReadCard />
            </Grid>
            <Grid item md={4}>
               
                <NewsReadCard />
            </Grid>
            <Grid item md={4}>
               
                <NewsReadCard />
            </Grid>
        </Grid>
        </Container>
    </Box>
    
  )
}

export default NewsRead
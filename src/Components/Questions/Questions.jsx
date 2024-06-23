import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import questionsimg from "../../assets/questionsimg.png"

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Questions = () => {
  return (
   <Box>
    <Container>
    <Typography textAlign={'center'} component={'h6'} variant='h6' color={'#2AA7FF'}>Get Your Answer</Typography>
    <Typography textAlign={'center'} component={'h1'} variant='h1' color={'#1B3C74'} fontWeight={'600'} lineHeight={'67px'}>
        Frequently Asked Questions</Typography>
    <Grid container alignItems={'center'}>
        <Grid item md={6}>
            <Box component={'img'} src={questionsimg} width={1}></Box>
        </Grid>
        <Grid item  md={6}>
        <Accordion >
        <AccordionSummary
          expandIcon={<AddIcon  sx={{color:'#2AA7FF'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Typography color={'#1B3C74'} lineHeight={'2'}>
            Why choose our medical for your family?
            </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon  sx={{color:'#2AA7FF'}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
              <Typography color={'#1B3C74'} lineHeight={'2'}>
              Why we are different from others?
            </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         expandIcon={<AddIcon  sx={{color:'#2AA7FF'}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
             <Typography color={'#1B3C74'} lineHeight={'2'}>
             Trusted & experience senior care & love
            </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      
      </Accordion>
      <Accordion>
        <AccordionSummary
         expandIcon={<AddIcon  sx={{color:'#2AA7FF'}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          
          <Typography color={'#1B3C74'} lineHeight={'2'}>
          How to get appointment for emergency
            </Typography>
            
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      
      </Accordion>
        </Grid>
    </Grid>
    </Container>
   
   </Box>
  )
}

export default Questions
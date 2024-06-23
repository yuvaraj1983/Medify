import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const FooterLink = ({children}) => {
  return (
   <Box sx={{display:'flex', flexDirection:'row'}}>
      <NavigateNextIcon />
        {children}
   </Box>
  )
}

export default FooterLink
import React from 'react';
import Navbar from '../../components/Navbar';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>

      <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }}>

        <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" fontWeight='bold' fontSize={20}>
              Home
            </Link>
            <Typography color="text.primary" fontWeight='bold' fontSize={20}>About</Typography>
          </Breadcrumbs>
        </FlexBetween>

        <Box 
          gap="1.75rem" 
          padding="1rem" 
          justifySelf="center" 
          alignSelf="center" 
          textAlign="center"
          object-fit="cover"
        >
          <img
            width="100%"
            height="100%"
            style={{ borderRadius: "0.75rem" }}
            src={`/assets/noBlur.jpg`}
          />
        </Box>

        <FlexBetween 
          gap="1.75rem" 
          padding="1rem 4%" 
          paddingTop={0}
        >
          <Typography 
            fontSize={50} 
            fontWeight='Bold'
          >
            About
          </Typography>
        </FlexBetween>

        <FlexBetween gap="1.75rem" padding="1rem 5%" paddingBottom={0}>
          <Box>
            <Typography fontSize={20} paddingBottom="1rem">+ Details</Typography>
            <Typography fontSize={20} paddingBottom="1rem">+ More Details</Typography>
            <Typography fontSize={20} paddingBottom="1rem">+ More Details</Typography>
          </Box>

          <Box>
            
          </Box>
        </FlexBetween>
      </Box>
    </>
  )
}

export default AboutPage;
import React from 'react';
import Navbar from '../../components/Navbar';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import GMap from '../../components/Map';
import Footer from '../../components/Footer';

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
            src={`/assets/storeFront1.jpg`}
          />
        </Box>

        <Divider spacing={1} variant='middle'>
          <Typography fontSize={50} textAlign="center" color='#F4A4AC' fontWeight="bold">ABOUT</Typography>
        </Divider>

        <Stack 
          direction='row' 
          spacing={20}
          gap="1.75rem" 
          padding="1rem 5%" 
          paddingTop={3}
          paddingBottom={10} 
          object-fit="cover"
          justifyContent="center"
          alignItems="center"
        >
          <Box object-fit="cover" minWidth={100} display="-ms-flexbox"  alignItems="center">
            <Typography style={{ overflowWrap: "break-word"}} fontSize={20} paddingBottom="1rem">
                          + 5B Basilan St., Bgy. Malamig, Mandaluyong, Philippines, 1550
            </Typography>
          
            <Typography fontSize={20} paddingBottom="1rem">+ keyanwaterandlaundry@gmail.com</Typography>
          
            <Typography fontSize={20} paddingBottom="1rem">+ 0915 588 3622 / 0968 879 3657</Typography>
            
          </Box>

          <Box>
            {/* <img width="25%" height="100%" src={`/assets/circlelogo.jpg`} /> */}
            <GMap/>
          </Box>
        </Stack>

        <Divider spacing={1} variant='middle'>
          <Typography fontSize={50} textAlign="center" color='#F4A4AC' fontWeight="bold">FAQ</Typography>
        </Divider>

        <Box bgcolor='#0b4c84' alignContent="center" padding="1rem 4%" sx={{ margin: '0 auto', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
            >
              faq #1
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
            >
              faq #2
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
            >
              faq #3
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Footer/>
    </>
  )
}

export default AboutPage;
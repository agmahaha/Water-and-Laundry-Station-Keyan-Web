import React from 'react';
import Navbar from '../../components/Navbar';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';
import GMap from '../../components/Map';
import Footer from '../../components/Footer';
import WidgetWrapper from '../../components/WidgetWrapper';

const AnnouncementsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>

      <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }} alignContent='center'>

        <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" fontWeight='bold' fontSize={20} onClick={navigate("/home")}>
              Home
            </Link>
            <Typography color="text.primary" fontWeight='bold' fontSize={20}>Announcements</Typography>
          </Breadcrumbs>
        </FlexBetween>

        <Divider spacing={1} variant='middle'>
          <Typography fontSize={50} textAlign="center" color='#F4A4AC' fontWeight="bold">ANNOUNCEMENTS</Typography>
        </Divider>

        <Stack
            justifyContent='center' alignContent='center' alignItems='center' display='flex'
        >
            <WidgetWrapper
                m="2rem 0"
                display='flex'
                flexDirection='column'
                width="40%"
            >
                <Box
                    
                >
                    <Typography
                        color='black'
                        fontSize={30}
                    >
                        title of announcement
                    </Typography>
                    <Typography
                        color='black'
                        fontSize={20}
                        sx={{
                            mt: "1rem",
                            mb: "1rem"
                        }}
                    >
                        body of announcement
                    </Typography>
                </Box>
                <Divider/>
                <Box
                    justifySelf="center"
                    alignSelf="center"
                    mb='0.5rem'
                >
                    <img
                    width="500vh"
                    height="auto"
                    alt="picture"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    src={`/assets/ann1.jpg`}
                    />
                </Box>
                <Divider/>
            </WidgetWrapper>
            <WidgetWrapper
                m="2rem 0"
                display='flex'
                flexDirection='column'
                width="40%"
            >
                <Box
                    
                >
                    <Typography
                        color='black'
                        fontSize={30}
                    >
                        title of announcement
                    </Typography>
                    <Typography
                        color='black'
                        fontSize={20}
                        sx={{
                            mt: "1rem",
                            mb: "1rem"
                        }}
                    >
                        body of announcement
                    </Typography>
                </Box>
                <Divider/>
                <Box
                    justifySelf="center"
                    alignSelf="center"
                    mb='0.5rem'
                >
                    <img
                    width="500vh"
                    height="auto"
                    alt="picture"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    src={`/assets/ann2.jpg`}
                    />
                </Box>
                <Divider/>
            </WidgetWrapper>
        </Stack>

      </Box>
      <Footer/>
    </>
  )
}

export default AnnouncementsPage;
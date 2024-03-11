import React, { useState } from 'react';
import Logo from "./circleLogo.jpg";
import { Grid, Typography, Box, useTheme, Button, Badge, IconButton, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CampaignIcon from '@mui/icons-material/Campaign';
import Footer from '../../components/Footer';

const HomePage = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(true);

    const navigateToPageNotFound = () => {
        navigate('*');
    };
    
    const navigateToWater = () => {
        navigate('/water');
    };

    const navigateToLaundry = () => {
        navigate('/laundry');
    };

    const navigateToAnnouncements = () => {
        navigate('/announcements');
    }

    const theme = useTheme();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar />
            <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity='warning'
                    variant='filled'
                >
                    This is an urgent announcement. The toast will expand depending on the phrase. This is an urgent announcement. The toast will expand depending on the phrase. This is an urgent announcement. The toast will expand depending on the phrase. Thank you.
                    </Alert>
            </Snackbar>
            <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }}>
                {/* Logo and Text */}
                <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', marginTop: '0px' }}>
                    {/* First Column (60% wider) */}
                    <Grid item xs={12} md={8}></Grid>

                    {/* Second Column (Logo and Text) */}
                    <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', marginTop: '40px', marginBottom: '20px', textAlign: 'center'
                    }}>
                        {/* Logo */}
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ height: '75px', width: '75px', marginRight: '10px' }}
                        />

                        {/* Text */}
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0b4c84',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem'
                            }
                            }}
                        >
                            Water & Laundry Station Keyan
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ textAlign: 'center', padding: '2% 2% 5% 2%', display: 'flex' }}>
                    {/* First Column */}
                    <Grid item xs={12} sm={12} md={5.5} lg={5.5} sx={{ flexFlow: 'column' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 'bold',
                                color: '#0b4c84',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '4rem'
                                },
                                [theme.breakpoints.down('xs')]: {
                                    fontSize: '3rem'
                                },
                            }}
                        >
                            COMPANY SERVICES
                        </Typography>
                        <IconButton onClick={navigateToAnnouncements}>
                            <Box bgcolor='#F4A4AC' p={2} borderRadius={15} display='flex' flexDirection='row' sx={{'&:hover': {
                                    transform: 'scale(1.1)',
                                }}}>
                                <Badge color='primary' badgeContent=" " invisible={false} size="large">
                                    <Typography pr={2} fontSize={30} color='black'>
                                    ANNOUNCEMENTS
                                    </Typography>
                                    <CampaignIcon sx={{ color: 'black'}} fontSize='large'/>
                                </Badge>
                            </Box>
                            
                        </IconButton>
                    </Grid>

                    {/* Second Column */}
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column', // Stack items vertically
                                alignItems: 'center', // Center items horizontally
                                justifyContent: 'space-between', // Align items at the start and end of the container
                                borderRadius: 6,
                                bgcolor: '#0b4c84',
                                height: '75%',
                                width: '75%',
                                padding: '10%',
                                margin: 'auto',
                                marginRight: '20%',
                                [theme.breakpoints.down('sm')]: {
                                    marginRight: 'auto',
                                },
                                '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={navigateToWater}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                }}
                            >
                                WATER GALLON
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#ffffff',
                                    textAlign: 'left',
                                }}
                            >
                                • Slim/Round <br/>
                                • Purified/Mineral/Alkaline
                            </Typography>
                            <Button
                                variant="primary"
                                sx={{
                                    backgroundColor: '#ffffff',
                                    height: '25%',
                                    alignSelf: 'flex-end',
                                    color: '#0b4c84',
                                    '&:hover': { backgroundColor: '#ffffff' },
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Grid>

                    {/* Third Column */}
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column', // Stack items vertically
                                alignItems: 'center', // Center items horizontally
                                justifyContent: 'space-between', // Align items at the start and end of the container
                                borderRadius: 6,
                                bgcolor: '#0b4c84',
                                height: '75%',
                                width: '75%',
                                padding: '10%',
                                margin: 'auto',
                                marginRight: '20%',
                                [theme.breakpoints.down('sm')]: {
                                    marginRight: 'auto',
                                },
                                '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                            }} onClick={navigateToLaundry}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                }}
                            >
                                LAUNDRY SERVICES
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#ffffff',
                                    textAlign: 'left'
                                }}
                            >
                                • Wash-Dry Fold <br/>
                                • Thick/Thin Garment <br/>
                                • Comforters<br/>
                            </Typography>
                            <Button variant="primary" sx={{ backgroundColor: '#ffffff', height: '25%', alignSelf: 'flex-end',
                                color: '#0b4c84', '&:hover': {backgroundColor: '#ffffff',}
                            }}>
                                Read More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                {/* Logo and Text */}
                <Grid container spacing={2}>
                    {/* First Column (60% wider) */}
                    <Grid item xs={12} md={5}></Grid>

                    {/* Second Column (Logo and Text) */}
                    <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center', // Center items horizontally
                                justifyContent: 'center', // Center items vertically
                                borderRadius: 15,
                                bgcolor: '#0b4c84',
                                height: '45%',
                                padding: '.5%',
                                width: '100%',
                                margin: 'auto',
                                marginRight: '10%',
                                marginBottom: '10%',
                                marginTop: '1%'
                            }}
                        >
                            <Typography
                                variant="h7"
                                sx={{
                                    color: '#ffffff',
                                }}
                            >
                                Door-to-door delivery; Pick-up depending on location (Condo Lobby, Houses, Drop-off at Store)
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </>
    );
};

export default HomePage;

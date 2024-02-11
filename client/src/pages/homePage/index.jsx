import React from 'react';
import Logo from "./circleLogo.jpg";
import { Grid, Typography, Box, useTheme, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const HomePage = () => {
    const navigate = useNavigate();
    const navigateToServices = () => {
        navigate('/services');
    };
    const theme = useTheme();
    return (
        <>
            <Navbar />
            <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }}>
                {/* Logo and Text */}
                <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', marginTop: '80px' }}>
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
                            Keyan Water & Laundry
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ textAlign: 'center', padding: '2% 2% 5% 2%', display: 'flex' }}>
                    {/* First Column */}
                    <Grid item xs={12} sm={12} md={5.5} lg={5.5}>
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
                            onClick={navigateToServices}
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
                                bgcolor: '#7092be',
                                height: '75%',
                                width: '75%',
                                padding: '10%',
                                margin: 'auto',
                                marginRight: '20%',
                                [theme.breakpoints.down('sm')]: {
                                    marginRight: 'auto',
                                },
                                '&:hover': {
                                    bgcolor: '#0b4c84',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                            }} onClick={navigateToServices}
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
        </>
    );
};

export default HomePage;

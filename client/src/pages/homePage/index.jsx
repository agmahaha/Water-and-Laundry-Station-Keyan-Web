import React from 'react';
import Logo from "./circleLogo.jpg";
import { Grid, Typography, Box, useTheme } from '@mui/material';
import Navbar from '../../components/Navbar';

const HomePage = () => {
    const { palette } = useTheme();

    return (
        <><Navbar />
        <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }}>
            {/* Logo and Text */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginTop: '80px' }}>
                {/* Logo */}
                <img
                    src={Logo}
                    alt="Logo"
                    style={{ height: '100px', width: '100px', marginLeft: '60%' }} />

                {/* Text */}
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0b4c84', flex: '40%' }}>
                    Keyan Water & Laundry
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ textAlign: 'center', padding: '2% 2% 5% 2%' }}>
                {/* First Column */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0b4c84' }}>
                        COMPANY SERVICES
                    </Typography>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            borderRadius: 6,
                            bgcolor: '#7092be',
                            height: '50%',
                            width: '50%',
                            padding: '10%',
                            margin: 'auto',
                        }}
                    >
                        {/* Content for the second column */}
                        {/* You can add your components/content here */}
                    </Box>
                </Grid>

                {/* Third Column */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            borderRadius: 6,
                            bgcolor: '#7092be',
                            height: '50%',
                            width: '50%',
                            padding: '10%',
                            margin: 'auto',
                        }}
                    >
                        {/* Content for the third column */}
                        {/* You can add your components/content here */}
                    </Box>
                </Grid>
            </Grid>
        </Box></>
    );
};

export default HomePage;

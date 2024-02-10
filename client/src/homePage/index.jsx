import React from 'react';
import Logo from "./circleLogo.jpg";
import { Grid, Typography, Box, useTheme } from '@mui/material';

const HomePage = () => {
    const { palette } = useTheme();

    return (
        <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px' }}>
            {/* Logo and Text */}
            <Grid container spacing={2} sx={{ textAlign: 'center', marginTop: '80px' }}>
                {/* First Column (60% wider) */}
                <Grid item xs={12} md={8}></Grid>

                {/* Second Column (Logo and Text) */}
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', marginTop: '40px', marginBottom: '20px'}}>
                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: '75px', width: '75px', marginRight: '10px' }}
                    />

                    {/* Text */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0b4c84' }}>
                        Keyan Water & Laundry
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ textAlign: 'center', padding: '2% 2% 5% 2%'}}>
                {/* First Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#0b4c84' }}>
                        COMPANY SERVICES
                    </Typography>
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
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
        </Box>
    );
};

export default HomePage;

import Pricelist from "./price.png";
import Order from "./order.png";
import { Box, Grid, Typography, useTheme} from '@mui/material'
// import Navbar from '../../components/Navbar'
import NavLoggedIn from '../../components/NavbarLogged'
import React from "react";
import { useNavigate } from "react-router-dom";

const OwnerView = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <NavLoggedIn />
            <Box
                style={{ marginTop: '80px', padding: '2% 10% 5% 10%', alignItems: 'center', }}
                sx={{
                    margin: 'auto',
                    borderRadius: 6,
                    bgcolor: '#ffffff',
                    width: '65%',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: '#0b4c84',
                    }}
                >
                    Welcome, <i>Employee Name!</i>
                </Typography>
                <Grid container spacing={1} sx={{ textAlign: 'right' , marginTop: '1%'}}>
                    {/* First Column */}
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        {/* Content for the first column */}
                        <Box
                            onClick={() => navigate("/orders")}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: '#0b4c84',
                                height: '100%',
                                padding: '2%',
                                width: '75%',
                                margin: 'auto',
                                marginRight: '4%',
                                borderRadius: 2,

                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    cursor: 'pointer',
                                    bgcolor: '#7092be',
                                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <img
                                src={Order}
                                alt="OrderList"
                                style={{ height: '70%', width: '55%', margin:'10%'}}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                VIEW ORDER LIST
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Second Column */}
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
                        {/* Content for the second column */}
                        <Box
                            onClick={() => navigate("/expenses")}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: '#0b4c84',
                                height: '100%',
                                padding: '2%',
                                width: '70%',
                                margin: 'auto',
                                marginLeft: '4%',
                                borderRadius: 2,
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    cursor: 'pointer',
                                    bgcolor: '#7092be',
                                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <img
                                src={Pricelist}
                                alt="Pricelist"
                                style={{ height: '70%', width: '70%', margin:'10%'}}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                VIEW EXPENSES
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OwnerView
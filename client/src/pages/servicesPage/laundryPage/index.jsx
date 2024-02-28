import React, {useState} from 'react'
import Navbar from '../../../components/Navbar'
import { Grid, Typography, Box, useTheme, Button, MobileStepper, Link, Breadcrumbs } from '@mui/material';
import { useNavigate } from 'react-router';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FlexBetween from '../../../components/FlexBetween';
import l1 from './laundryImgs/l1.jpg'
import l2 from './laundryImgs/l2.jpg'
import l3 from './laundryImgs/l3.jpg'

const Auto = autoPlay(SwipeableViews);

const images = [l1, l2, l3]
 


const LaundryPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0)
  const max = images.length
  const navigate = useNavigate()

  const next = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prev = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleStepChange = (step)=> {
    setActiveStep(step)
  }

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
    <Navbar/>
    <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px', height: '700px'}}>
    <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" fontWeight='bold' fontSize={20}>
              Home
            </Link>
            <Typography color="text.primary" fontWeight='bold' fontSize={20}>Laundry Service</Typography>
          </Breadcrumbs>
    </FlexBetween>
                <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center' }}>
                    {/* Picture Carousel */}
                    <Grid item xs={12} md={7} sx={{ display: 'flex', marginTop: '100px', textAlign: 'center'}}>
                    <Box
                      sx ={{ width: "600px",
                      height: "400px",
                      margin: 'auto'
                      }}>
                        <Auto
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={activeStep}
                          onChangeIndex={handleStepChange}
                          enableMouseEvents
                        >
                          {images.map((step, index) => (
                            Math.abs(activeStep - index) <= 2 ? (
                              <Box
                                component="img"
                                sx ={{ width: "600px",
                                  height: "400px",
                                  display:'block',
                                  overflow:'hidden'
                                }}
                                src={step}
                                alt={`Image ${index + 1}`}
                              
                              />
                            ): null
                          ))}
                          
                        </Auto>
                        <MobileStepper
                          steps={max}
                          position='static'
                          activeStep={activeStep}
                          nextButton={
                            <Button
                            size="small"
                            onClick={next}
                            disabled={activeStep === max - 1}
                          >
                            {theme.direction === 'rtl' ? (
                              <KeyboardArrowLeft />
                            ) : (
                              <KeyboardArrowRight />
                            )}

                            </Button>
                          }

                          backButton={
                            <Button size="small" onClick={prev} disabled={activeStep === 0}>
                              {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                              ) : (
                                <KeyboardArrowLeft />
                              )}
                            </Button>
                          }
                        
                        />
                      </Box>  
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ display: 'flex', marginTop: '100px', textAlign: 'center',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'space-between'}}>

                        {/* Text */}
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0b4c84',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem'
                            }
                            }}
                        >
                            Laundry Service
                        </Typography>
                        <Typography
                                variant="h6"
                                sx={{
                                    textAlign: 'left',
                                }}
                            >
                                • Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
                                 illo numquam nesciunt eius. Aliquam quod provident tenetur eaque natus, sed 
                                 inventore excepturi veniam, quisquam aperiam corporis, mollitia facere repellat
                                  sapiente? <br/>
                        </Typography>
                        <Box
                          sx={{
                            borderRadius: 6,
                            bgcolor: '#0b4c84',
                            height: '10%',
                            width: '50%',
                            padding: '5%',
                            '&:hover': {
                              bgcolor: '#7092be',
                              transform: 'scale(1.1)',
                              cursor: 'pointer',
                          },
                          
                          }}
                          onClick= {navigateToLogin}
                          >
                        <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                }}
                            >
                                ORDER ⭢
                        </Typography>
                        </Box>
                        
                    </Grid>
                        
                </Grid>
    </Box>
    </>
  )
}

export default LaundryPage
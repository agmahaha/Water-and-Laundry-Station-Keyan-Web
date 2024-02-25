import React, {useState} from 'react'
import Navbar from '../../../components/Navbar'
import { Grid, Typography, Box, useTheme, Button, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import w1 from './waterImgs/w1.jpg'
import w2 from './waterImgs/w2.jpg'
import w3 from './waterImgs/w3.jpg'

const Auto = autoPlay(SwipeableViews);

const images = [w1, w2, w3]
 


const WaterPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0)
  const max = images.length

  const next = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prev = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleStepChange = (step)=> {
    setActiveStep(step)
  }

  return (
    <>
    <Navbar/>
    <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px', height: '700px' }}>
                <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', marginTop: '80px' }}>
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
                        {console.log(images)}
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

                    <Grid item xs={12} md={5} sx={{ display: 'flex', marginTop: '100px', marginBottom: '20px', textAlign: 'center'
                    }}>

                        {/* Text */}
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0b4c84',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem'
                            }
                            }}
                        >
                            Water Service
                        </Typography>
                    </Grid>
                </Grid>
    </Box>
    </>
  )
}

export default WaterPage
import React, {useState} from 'react'
import { Typography, Button, Box, Grid} from '@mui/material'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";


const Order = () => {
  
    return(
       <><Navbar/>
       <Box
            style={{ padding: '2% 2% 2% 2%' }}
            display="flex"
            gap="20px"
            sx={{
                margin: 'auto',
                borderRadius: 6,
                bgcolor: '#ffffff',
                width: '80%',
                height: '50%',
                }}
        >
            <Grid container>
              <Grid xs = {6} sx= {{borderRight:'2px solid black',}}>
                <Grid container p={2}>
                  <Grid xs = {12} sx= {{borderBottom:'2px solid #0B4C84'}}>
                    <Grid container sx={{textAlign: 'center', marginBottom:'15%'}}>
                            <Grid xs= {4} >
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: '#ffffff',
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                
                                }}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color: 'black',
                                      }}
                                  >
                                      Comforters/Blankets
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: '#fffff',
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    color: "white",
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                
                                }}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color: 'black',
                  
                                      }}
                                  >
                                      Thick/Linen/Curtains
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: '#ffffff',
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                
                                }}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color: 'black',
                                      }}
                                  >
                                      Regular Clothing
                              </Typography>
                              </Box>
                            </Grid>
                        </Grid>
                  </Grid>
                  <Grid xs = {12} sx={{textAlign: 'center', marginTop:'15%'}}>
                    <Typography>sample 3</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs = {6}>
                <Grid container p = {2}>
                  <Grid xs = {12} sx= {{borderBottom:'2px solid #0B4C84'}}>
                    <h1> General Guidelines:</h1>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography sx= {{ marginBottom:'15%'}}> 
                        • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                  </Grid>
                <Grid xs = {12} sx={{marginTop:'2%'}}>
                  <h2>PRICE BREAKDOWN:</h2>
                </Grid>
              </Grid>
                </Grid>
                
                
            </Grid>

        </Box>
        </>
    )
}

export default Order
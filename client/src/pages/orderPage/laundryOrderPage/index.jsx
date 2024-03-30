import React, {useState} from 'react'
import { Typography, Button, Box, Grid, Checkbox, TextField, FormControlLabel} from '@mui/material'
import {StorefrontOutlined, LocalShippingOutlined} from '@mui/icons-material'
import Navbar from '../../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";


const LaundryOrder = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [L1, setL1] = useState (false)
  const [L2, setL2] = useState (false)
  const [L3, setL3] = useState (false)


  const handleOptionChange = (option) => {
    setSelectedOption(option)}

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
                <h2>Service Type</h2>
                  <Grid xs = {12} sx= {{borderBottom:'2px solid #0B4C84'}}>
                    <Grid container sx={{textAlign: 'center', marginBottom:'15%'}}>
                            <Grid xs= {4} >
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (L1 ? '#0B4C84' : '#ffffff'),
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
                                  onClick={() => {setL1(!L1)}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L1 ? '#ffffff' : 'black'),
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
                                  bgcolor: (L2 ? '#0B4C84' : '#ffffff'),
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
                                onClick={() => {setL2(!L2)}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L2 ? '#ffffff' : 'black'),
                  
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
                                  bgcolor: (L3 ? '#0B4C84' : '#ffffff'),
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
                                onClick={() => {setL3(!L3)}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L3 ? '#ffffff' : 'black'),
                                      }}
                                  >
                                      Regular Clothing
                              </Typography>
                              </Box>
                            </Grid>
                        </Grid>
                  </Grid>
                  <Grid xs = {12} p={2} sx={{ marginTop:'10%'}}
                        display="column"
                        justifyContent="center"
                        alignItems= "center">
                    <Grid container sx={{marginBottom:'20px'}}>
                      <Box
                        sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: (selectedOption === 'delivery' ? '#0B4C84' : '#fffff'),
                          height: '30px',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          justifyContent:'flex-start',
                          '&:hover': {
                            bgcolor: '#7092be',
                            cursor: 'pointer',
                          },}}
                          display="flex"
                          flexDirection="row"
                          alignItems= "center"
                          onClick ={() => handleOptionChange('delivery')}
                          >
                        <LocalShippingOutlined sx={{ fontSize: '6rem', color: (selectedOption === 'delivery'? '#ffffff' : 'black') }}/>
                        <Typography
                          variant='h4'
                          sx={{flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            color: (selectedOption === 'delivery' ? '#ffffff' : 'black'),}}>
                          For Delivery
                        </Typography>
                        <Checkbox checked={selectedOption === 'delivery'}
                          sx={{ '& .MuiSvgIcon-root': {fontSize: '3rem',},
                                '&.Mui-checked': {color: 'white',}}}/>
                      </Box>
                      {selectedOption === 'delivery' && (
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems= "center"
                          sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: '#ffffff',
                          height: '50%',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          }}
                          gap='20px'>
                          <TextField
                            fullWidth
                            label="Address"
                            defaultValue= ''
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            />
                          <TextField
                            fullWidth
                            label="Contact No."
                            defaultValue= ''
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            />
                          <FormControlLabel label='Use same address and contact number in profile' 
                              control={<Checkbox/>}/>
                        </Box>
                      )}
                      </Grid>
                      <Grid container>
                      <Box
                        sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: (selectedOption === 'pickup' ? '#0B4C84' : '#fffff'),
                          height: '30px',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          justifyContent:'flex-start',
                          '&:hover': {
                            bgcolor: '#7092be',
                            cursor: 'pointer',
                        },}}
                          display="flex"
                          flexDirection="row"
                          alignItems= "center"
                          onClick={() => handleOptionChange('pickup')}>
                        <StorefrontOutlined sx={{ fontSize: '6rem', color: (selectedOption === 'pickup' ? '#ffffff' : 'black') }}/>
                        <Typography
                          variant='h4'
                          sx={{flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            color: (selectedOption === 'pickup' ? '#ffffff' : 'black')}}
                          >
                          In-Store Pickup
                        </Typography>
                        <Checkbox checked={selectedOption === 'pickup'}
                          sx={{ '& .MuiSvgIcon-root': {fontSize: '3rem' },
                                '&.Mui-checked': {color: 'white',}}}/>
                      </Box>
                      {selectedOption === 'pickup' && (
                        <Box
                          sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: '#ffffff',
                          height: '50%',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          }}>
                          <Typography>
                            Store address
                          </Typography>
                        </Box>
                      )}
                    </Grid>
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

export default LaundryOrder
import React, {useState} from 'react'
import { Typography, Button, Box, Grid, styled, Paper} from '@mui/material'
import {Formik} from "formik"
import * as yup from 'yup'
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
                <Grid xs= {6}>
                    <Grid container sx={{textAlign: 'center'}}>
                        <Grid xs= {4}>
                          <Typography>
                            opt 1
                          </Typography>
                        </Grid>
                        <Grid xs= {4}>
                          <Typography>
                            opt 2
                          </Typography>
                        </Grid>
                        <Grid xs= {4}>
                          <Typography>
                            opt 3
                          </Typography>
                        </Grid>
                    </Grid>
                
                </Grid>
                <Grid xs= {6}>
                    <h1>Guidelines</h1>
                    <Typography>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                </Grid>
                <Grid xs= {6}>
                    <Typography>sample 3</Typography>
                </Grid>
                <Grid xs= {6}>
                    <Typography>PRICE BREAKDOWN</Typography>
                </Grid>
                
            </Grid>

        </Box>
        </>
    )
}

export default Order
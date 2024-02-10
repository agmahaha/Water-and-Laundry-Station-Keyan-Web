import React, {useState} from 'react'
import { Card, TextField, Typography, Button, Box, Alert} from '@mui/material'
import {Formik} from "formik"
import * as yup from 'yup'


const signupSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  username:  yup.string().required("required"),
  password: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
  username:  yup.string().required("required"),
  password: yup.string().required("required"),
})

const initialValuesReg = {
  email:"",
  username:"",
  password:"",

}

const initialValuesLog ={
  username:"",
  password:"",
}

const login = () => {
  const isLogin = true;
  return (
    <Formik
        initialVal = {isLogin ? initialValuesLog : initialValuesReg}
        formSchema={isLogin ? loginSchema : signupSchema}
    >
        <form onSubmit={() => alert("Submitted")}>
        <Box
        style={{marginTop: '10%', padding:'2% 10% 5% 10%'}}
        sx={{
          margin:'auto',
          borderRadius: 6,
          bgcolor:'#7092be',
          width: '50%',
          left: 0,
          right: 0,
          textAlign:'center'
        }}
        >
          <Typography
          variant="h4" 
          sx={{
            fontWeight: 'bold',
          }}>
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </Typography>

          {!isLogin && (
            <TextField
            fullWidth
            label="Email Address"
            name='email'
            error={false}
            helperText={"Please enter valid email."}
            autoComplete='false'
          />
          )}
          
          <TextField
          fullWidth
          label="Username"
          name='username'
          error={false}
          helperText={"Please enter valid username."}
          autoComplete='false'
          />
          <TextField
          fullWidth
          type='password'
          label="Password"
          name='password'
          error={false}
          helperText={"Please enter valid password."}
          autoComplete='false'
          />
          <Button 
            variant='contained' 
            type='submit' 
            name='submit'>
             {isLogin ? 'LOGIN' : 'REGISTER'}
             </Button>
        </Box>
        </form>
    </Formik>
  )
}

export default login
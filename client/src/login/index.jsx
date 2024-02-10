import React, {useState} from 'react'
import { Card, TextField, Typography, Button, Box, Alert, useTheme} from '@mui/material'
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

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { palette } = useTheme();
  return (
    <Formik
        initialVal = {isLogin ? initialValuesLog : initialValuesReg}
        formSchema={isLogin ? loginSchema : signupSchema}
    >
      {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
      })=> (
        <form onSubmit={() => alert("Submitted")}>
        <Box
        style={{marginTop: '10%', padding:'2% 10% 5% 10%'}}
        display="grid"
        gap="20px"
        sx={{
          margin:'auto',
          borderRadius: 6,
          bgcolor:'#7092be',
          width: '50%',
          height: '50%',  
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
            error={Boolean(errors.email)}
            helperText={errors.email}
            autoComplete='false'
            sx={{
              '& .Mui-error': {
                color: (theme) => (Boolean(errors.email) ? theme.palette.error.main : 'black'),
              },
              color: 'black',      
              bgcolor: 'white',    
            }}
          />
          )}
          
          <TextField
          fullWidth
          label="Username"
          name='username'
          error={Boolean(errors.username)}
          helperText={errors.username}
          autoComplete='false'
          sx={{
            color: 'black',      
            bgcolor: 'white',    
          }}
          />
          <TextField
          fullWidth
          type='password'
          label="Password"
          name='password'
          error={Boolean(errors.password)}
          helperText={errors.password}
          autoComplete='false'
          sx={{
            color: 'black',      
            bgcolor: 'white',    
          }}
          />
          <Button 
            variant='contained' 
            type='submit' 
            name='submit'
            sx={{
              color: 'black',      
              bgcolor: 'white',    
            }}>
             {isLogin ? 'LOGIN' : 'REGISTER'}
          </Button>
          <Typography
              onClick={() => {
                setIsLogin(!isLogin)
                resetForm();
                  }}
                  sx={{
                    color: 'Black',
                    "&:hover": {
                        cursor: "pointer",
                        color: palette.primary.light,
                    },
                  }}
              >
                  {isLogin
                  ? "Don't have an Account? Register HERE!"
                  : "Already have an Account? Log in HERE!"}
         </Typography>
        </Box>
        </form>
      )}
    </Formik>
  )
}

export default Login
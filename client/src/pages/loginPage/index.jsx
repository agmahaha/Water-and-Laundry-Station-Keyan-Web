import React, {useState} from 'react'
import { Card, TextField, Typography, Button, Box, Alert, useTheme, Stack} from '@mui/material'
import {Formik} from "formik"
import * as yup from 'yup'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


const signupSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  username:  yup.string().required("required"),
  password: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
})

const initialValuesReg = {
  username:"",
  password:"",  
  email:"",
  userType: "customer"

}

const initialValuesLog ={
  username:"",
  password:"",
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { palette } = useTheme();

  const navigate = useNavigate();

  const handleFormSubmit = async(values, onSubmitProps) => {
    if (isLogin === true) await loginUser(values, onSubmitProps);
    if (isLogin === false) await registerUser(values, onSubmitProps);
  };

  const loginUser = async (values, onSubmitProps) => {
    console.log("logging in user: " + values.username);
    
    const loggedInResponse = await fetch(
      "http://localhost:3001/auth/login",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:  JSON.stringify(values)
      }
    )

    const loggedIn = await loggedInResponse.json()
    console.log(loggedIn)
    console.log("logging in user: " + loggedIn.token);
    onSubmitProps.resetForm()


    if (loggedIn.user.userType === "owner" || loggedIn.user.userType === "employee") {
      alert("Here's what we got: \n" + "Username: " + loggedIn.user.username + "\n Password: " + loggedIn.user.password);
      navigate("/employee/home");
    } 
    else if (loggedIn.user.userType === "customer") {
      navigate("/home")
    }
    else {
      alert("invalid Credentials!");
    }
  }

  const registerUser = async (values, onSubmitProps) => {
    console.log(values.userType)

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          email: values.email,
          userType: "customer"
        })
      }
    )

    const savedUser = await savedUserResponse.json()

    console.log("registering in user: " + savedUser.email + values.username);
    onSubmitProps.resetForm()

    if (values.username.toLowerCase() !== "" && values.password !== "" && values.email !== "") {
      alert("Here's what we got: \n" + "Email: " + values.email + "\nUsername: " + values.username + "\n Password: " + values.password);
      setIsLogin(!isLogin)
    } 

    else {
      alert("invalid Credentials!");
    }
  }

  return (
    <><Navbar />
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLog : initialValuesReg}
      formSchema={isLogin ? loginSchema : signupSchema}
    >
      {({
        values, 
        errors, 
        touched, 
        handleBlur, 
        handleChange, 
        handleSubmit, 
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            style={{ marginTop: '80px', padding: '2% 10% 5% 10%' }}
            display="grid"
            gap="20px"
            sx={{
              margin: 'auto',
              borderRadius: 6,
              bgcolor: '#0b4c84',
              width: '50%',
              height: '50%',
              left: 0,
              right: 0,
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#F4A4AC',
                fontWeight: 'bold',
              }}>
              {isLogin ? 'LOGIN' : 'REGISTER'}
            </Typography>

            {!isLogin && (
              <TextField
                fullWidth
                label="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                variant='filled'
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.username && errors.username}
                InputLabelProps={{ style: {color: '#F4A4AC'}}}
                InputProps={{ style: {color: 'white'}}}
                autoComplete='false'
                />
            )}

            <TextField
              fullWidth
              label="Username"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              name="username"
              variant='filled'
              error={Boolean(touched.username) && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              InputLabelProps={{ style: {color: '#F4A4AC'}}}
              InputProps={{ style: {color: 'white'}}}
              />
            <TextField
              fullWidth
              type='password'
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name='password'
              variant='filled'
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputLabelProps={{ style: {color: '#F4A4AC'}}}
              InputProps={{ style: {color: 'white'}}}
              />
            <Button
              variant='contained'
              type='submit'
              name='submit'
              sx={{
                color: 'black',
                bgcolor: 'white',
                "&:hover": {
                  color: 'white',
                  bgcolor: '#BDBDBD'
                },
              }}
              >
              {isLogin ? 'LOGIN' : 'REGISTER'}
            </Button>
            <Stack direction='row' spacing={1} useFlexGap>
              <Button
              variant='contained'
              type='submit'
              name='submit'
              fullWidth
              sx={{
                color: 'black',
                bgcolor: 'white',
                "&:hover": {
                  color: 'white',
                  bgcolor: '#BDBDBD'
                },
              }}
              >
                {isLogin ? 'LOGIN WITH FACEBOOK' : 'REGISTER WITH FACEBOOK'} <FacebookIcon />
            </Button>
            <Button
              variant='contained'
              type='submit'
              name='submit'
              fullWidth
              sx={{
                color: 'black',
                bgcolor: 'white',
                "&:hover": {
                  color: 'white',
                  bgcolor: '#BDBDBD'
                },
              }}
              >
                {isLogin ? 'LOGIN WITH GOOGLE' : 'REGISTER WITH GOOGLE'} <GoogleIcon />
            </Button>
            </Stack>
            
            <Typography
              onClick={() => {
                setIsLogin(!isLogin)
                resetForm()
              } }
              sx={{
                color: 'White',
                textDecoration: 'underline',
                "&:hover": {
                  cursor: "pointer",
                  color: "#F4A4AC",
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
    </>
  )
}

export default Login
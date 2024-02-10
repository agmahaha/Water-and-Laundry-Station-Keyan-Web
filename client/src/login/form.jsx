import {useState} from 'react'
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";

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


const Form = () => {
    const { palette } = useTheme();
    const [pageType, setPageType] = useState ("login");
    const isLogin = true;
  return (
    <Formik 
        initialVal = {isLogin ? initialValuesLog : initialValuesReg}
        formSchema={isLogin ? loginSchema : signupSchema}>
        {({
            errors, handleChange, handleSubmit, setFieldView, resetForm,
            handleBlur, values, touched
        }) => (
            <form>
                <Box 
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))">
                    <TextField
                         label="username"
                         onBlur={handleBlur}
                         onChange={handleChange}
                         sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        label="password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>
                <Box>
                        <Button
                            fullWidth
                            type="Submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: palette.primary.main,
                                color: palette.background.alt,
                                "&:hover": { color: palette.primary.main },
                            }}
                        >
                            {isLogin ? "LOGIN": "REGISTER"}
                        </Button>
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                color: palette.primary.main,
                                "&:hover": {
                                    cursor: "pointer",
                                    color: palette.primary.light,
                                },
                            }}
                        >
                            {isLogin
                            ? "Don't have an Account? Register here!"
                            : "Already have an Account? Log in here!"}
                        </Typography>
                    </Box>
            </form>
        )

        }   

    </Formik>
  )
}

export default Form
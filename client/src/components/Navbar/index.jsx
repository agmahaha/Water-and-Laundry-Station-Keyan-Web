import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab }from '@mui/material';
import { useNavigate} from 'react-router';

const Navbar = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate()
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
    
        switch (newValue) {
          case 0:
            navigate('/about');
            break;
          case 1:
            navigate('/services');
            break;
          case 2:
            navigate('/login');
            break;
          default:
            navigate('/');
        }
      };
    

  return (
    <React.Fragment>
        <AppBar
            sx ={{background:'#0b4c84', 
            margin:"10px auto",
            borderRadius:"10px",
            position:'fixed',
            width: "85%",
            left: 0,
            right: 0,
            }}>
            <Toolbar>
                <Typography
                    onClick={() => {
                        navigate('/')
                      } }
                      sx={{
                        color: 'White',
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                >
                    LOGO
                </Typography>
                <Tabs
                    sx ={{marginLeft:"auto"}} 
                    textColor='inherit'
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'>
                        <Tab label ="About" sx={{ color: "white" }}/>
                        <Tab label ="Services" sx={{ color: "white" }}/>
                        <Tab label ="Login/Signup" sx={{ color: "white" }}/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>

  )
}

export default Navbar
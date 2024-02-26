import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab }from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import Logo from './keyanwhite.PNG'
import Logo2 from './pinkLogoKeyan.PNG'

const Navbar = () => {
    const [value, setValue] = useState();
    const [hovering, setHovering] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        if (location.pathname === '/about') {
          setValue(0);
        } else if (location.pathname === '/services') {
          setValue(1);
        } else if (location.pathname === '/login') {
          setValue(2);
        }
      }, [location.pathname]);
    
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
            position:'sticky',
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
                    onMouseOver={() => setHovering(true)}
                    onMouseOut={() => setHovering(false)}
                >
                    <img
                    src={hovering ? Logo2 : Logo}
                    alt="Logo"
                    style={{ height: '60px', width: '60px' }}
                    />
                </Typography>
                <Tabs
                    sx ={{marginLeft:"auto"}} 
                    textColor='inherit'
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{style: {background:'#F4A4AC'}}}
                    >
                        <Tab label ="About" sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}/>
                        <Tab label ="Services" sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}/>
                        <Tab label ="Login/Signup" sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </React.Fragment>

  )
}

export default Navbar
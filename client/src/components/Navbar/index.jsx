import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab, MenuItem, Menu,}from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import Logo from './keyanwhite.PNG'
import Logo2 from './pinkLogoKeyan.PNG'

const Navbar = () => {
    const [value, setValue] = useState();
    const [anchorE1, setAnchorE1] = useState(false)
    const open =  Boolean(anchorE1)
    const [hovering, setHovering] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/about') {
          setValue(0);
        } else if (location.pathname === '/announcements') {
          setValue(1);
        } else if (location.pathname === ('/water' || '/laundry')) {
          setValue(2);
        } else if (location.pathname === '/login') {
          setValue(3);
        } 
      }, [location.pathname]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    
        switch (newValue) {
          case 0:
            navigate('/about');
            break;
          case 1:
            navigate('/announcements');
            break;
          case 2:
            setAnchorE1(!anchorE1)
            break;
          case 3:
            navigate('/login');
            break;
          default:
            navigate('/');
        }
      };
    const handleClose = () =>{
      setAnchorE1(null)
    }

    const handleOpen= () =>{
      setAnchorE1(true)
    }

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
                        <Tab label ="Announcements" sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}/>
                        <Tab label ="Services" 
                        id='water_or_laundry'
                        onClick={handleOpen}
                        aria-controls={open ? 'water_or_laundry' : undefined}
                        aria-haspopup= 'true'
                        aria-expanded= {open ? true : undefined}
                        sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}>

                          
                        </Tab>
                        <Tab label ="Login/Signup" sx={{ color: "white", "&:hover": {color: "#F4A4AC"}}}/>

                        </Tabs>
            </Toolbar>
            <Menu id= 'water_or_laundry' 
                              anchorEl={{anchorE1}} 
                              open = {open} 
                              MenuListProps={{
                                'aria-labelledby' : 'water_or_laundry'
                              }}
                              onClose={handleClose}
                              sx ={{marginRight:'auto'}}>
                              <MenuItem onClick={() => {
                                navigate('/water')
                              } }>Water</MenuItem>
                              <MenuItem onClick={() => {
                                navigate('/laundry')
                              } }>Laundry</MenuItem>
                            </Menu>
                          
        </AppBar>                      
    </React.Fragment>

  )
}

export default Navbar
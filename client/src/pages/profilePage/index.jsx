import React, {useEffect, useState} from 'react'
import { Card, TextField, Typography, Button, Box, Alert, useTheme, Stack, Breadcrumbs, Link} from '@mui/material'
import Navbar from '../../components/Navbar'
import {useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const [name, setName] = useState ("")
    const [address, setAddress] = useState ("")
    const [phone_num, setPhoneNum] = useState ("")
    var pShrink, nShrink, aShrink


    useEffect(() =>{
        setName(user.name)
        setAddress(user.address)
        setPhoneNum(user.phone_num)

    }, [])

    if (address !== ""){
        aShrink = true
    }else if (name !== ""){
        nShrink = true
    }else if (phone_num !== ""){
        pShrink = true
    }

    const updateDetails = async () => {
        const updatedProfile = await fetch(
            "http://localhost:3001/users/updateProfile",
            {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                id: user._id,
                address: address,
                phone_num: phone_num,
                name: name
              })
            }
          )
        
        const updatedUser = await updatedProfile.json()
      
    }

    return(
       <><Navbar/>
        <Box
                    style={{ padding: '2% 10% 5% 10%', alignItems: 'center', }}
                    display="grid"
                    gap="20px"
                    sx={{
                        margin: 'auto',
                        borderRadius: 6,
                        bgcolor: '#ffffff',
                        width: '65%',
                        height: '50%',
                        textAlign: 'center',
                    }}
                >
            <TextField
                fullWidth
                label="NAME"
                defaultValue= {user.name}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}, shrink: nShrink}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                onChange = {(e) => setName(e.target.value)}
                />
            <TextField
                fullWidth
                label="ADDRESS"
                defaultValue= {user.address}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}, shrink: aShrink}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                onChange = {(e) => setAddress(e.target.value)}
                />
            <TextField
                fullWidth
                label="EMAIL"
                value= {user.email}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                disabled
                
                />
            <TextField
                fullWidth
                label="PHONE NUMBER"
                defaultValue= {user.phone_num}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}, shrink: pShrink}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                onChange = {(e) => setPhoneNum(e.target.value)}
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
                width:'30%'
              }}
              onClick={updateDetails}
              >
              Save
            </Button>

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
                width:'30%'
              }}
              >
              Revert Changes
            </Button>
                
        </Box>
       </>
    )
}

export default Profile
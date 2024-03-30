import React, {useEffect, useState} from 'react'
import { Card, TextField, Typography, Button, Box, Alert, useTheme, Stack, Breadcrumbs, Link} from '@mui/material'
import Navbar from '../../components/Navbar'
import {useSelector, useDispatch } from "react-redux";
import {updateUser} from '../../state'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token)
    const hold = useState()
    const [name, setName] = useState ()
    const [address, setAddress] = useState ()
    const [phone_num, setPhoneNum] = useState ()
    var pShrink, nShrink, aShrink, holdShrink
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)

    if(hold !== ""){
        holdShrink = true
    }else if (address !== ""){
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
        
        const getUpdatedUser = await fetch(`http://localhost:3001/users/${user._id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json",
                       "Authorization": `Bearer ${token}` },
        })
        console.log(token)
        if (!getUpdatedUser.ok) {
          console.error('Failed to fetch user data')
        }else{
          const updatedUser = await getUpdatedUser.json()
          dispatch(updateUser({user : updatedUser}))
        }
        
        
    }

    if(user){
      var username = user.username
      var CName = user.name
      var CAddress = user.address
      var CPhone = user.phone_num
      var CEmail = user.email
    }

    useEffect(() =>{
      setName(CName)
      setAddress(CAddress)
      setPhoneNum(CPhone)

  }, [])

  if(isEdit && username){
    return(
       <><Navbar/>
        <Box
                    style={{ padding: '2% 10% 5% 10%' }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems= "center"
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
                defaultValue= {CName}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}, shrink: nShrink}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                onChange = {(e) => setName(e.target.value)}
                />
            <TextField
                fullWidth
                label="ADDRESS"
                defaultValue= {CAddress}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}, shrink: aShrink}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                onChange = {(e) => setAddress(e.target.value)}
                />
            <TextField
                fullWidth
                label="EMAIL"
                value= {CEmail}
                variant='outlined'
                InputLabelProps={{ style: {color: 'black'}}}
                InputProps={{ style: {color: 'black'}}}
                autoComplete='false'
                disabled
                
                />
            <TextField
                fullWidth
                label="PHONE NUMBER"
                defaultValue= {CPhone}
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
                color: 'white',
                bgcolor: '#0b4c84',
                "&:hover": {
                  color: 'white',
                  bgcolor: '#BDBDBD'
                },
                width:'15%'
              }}
              onClick={() => {
                updateDetails()
                setIsEdit(!isEdit)
              }}
              >
              Save
            </Button>

            <Button
              variant='contained'
              type='submit'
              name='submit'
              sx={{
                color: 'white',
                bgcolor: '#0b4c84',
                "&:hover": {
                  color: 'white',
                  bgcolor: '#BDBDBD'
                },
                width:'15%'
              }}
              onClick={() => {window.location.reload()}}
              >
              Revert Changes
            </Button>
                
        </Box>
       </>
    )
  }else if (username && !isEdit){
    return(
      <><Navbar/>
       <Box
                   style={{ padding: '2% 10% 5% 10%' }}
                   display="flex"
                   flexDirection="column"
                   justifyContent="center"
                   gap="20px"
                   sx={{
                       margin: 'auto',
                       borderRadius: 6,
                       bgcolor: '#ffffff',
                       width: '65%',
                       height: '50%',

                   }}
               >
           <h3>NAME:</h3>
           <Typography>{CName}</Typography>

           <h3>ADDRESS:</h3>
           <Typography>{CAddress}</Typography>

           <h3>EMAIL:</h3>
           <Typography>{CEmail}</Typography>

           <h3>Contact Number:</h3>
           <Typography>{CPhone}</Typography>
           
           <Button
             variant='contained'
             type='submit'
             name='submit'
             sx={{
               color: 'white',
               bgcolor: '#0b4c84',
               "&:hover": {
                 color: 'white',
                 bgcolor: '#BDBDBD'
               },
               width:'15%'
             }}
             onClick={() => {
               setIsEdit(!isEdit)
             }}
             >
             Edit Details
           </Button>
               
       </Box>
      </>
     )
  }
    
}

export default Profile
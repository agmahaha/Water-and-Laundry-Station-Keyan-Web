import React, {useState} from 'react'
import { Typography, Box, Grid, Checkbox, TextField, FormControlLabel, Breadcrumbs, Link, Alert, AlertTitle} from '@mui/material'
import {StorefrontOutlined, LocalShippingOutlined} from '@mui/icons-material'
import Navbar from '../../../components/Navbar'
import FlexBetween from '../../../components/FlexBetween'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import LP1 from "./ordersimg/curtain.jpg"
import LP2 from "./ordersimg/thick.jpg"
import LP3 from "./ordersimg/regular.png"


const LaundryOrder = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [L1, setL1] = useState (false)
  const [L2, setL2] = useState (false)
  const [L3, setL3] = useState (false)
  const [sameAddress, setSameAddress] = useState(false)
  const itemsOrdered = [
      (L1 ? {name: 'Comforters / Blankets', price: 150} : {}),
      (L2 ? {name: 'Thick / Linen / Curtains', price: 200} : {}),
      (L3 ? {name: 'Regular Clothing', price: 100} : {}),
    ]
  const filteredItems = itemsOrdered.filter(item => Object.keys(item).length > 0)
  const [address, setAddress] = useState('')
  const [contactNum, setContactNum] = useState (null)
  var savedAddress = ''
  var savedContact = ''
  var proceedOrder = false
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleOptionChange = (option) => {
    setSelectedOption(option)}

  const estimatedTotal = () => {
    return filteredItems.reduce((total, item) => total + item.price, 0)
  }

  if(user){
    var user_ID = user._id 
  }

  const orderItems = () => {
    var orderedItems = []

    if(filteredItems != null){
      filteredItems.forEach(item => {
        const itemName = item.name
        const type = 'laundry'
        const weight = 5
        const pricePerItem = item.price

        orderedItems.push({ itemName, type, weight, pricePerItem })
      })
    }
    

    if(orderedItems != null){
      orderedItems = orderedItems.filter(item => 
        filteredItems.some(filteredItem => filteredItem.name === item.itemName)
      )
    }
    
      return orderedItems
  }

  if(selectedOption === 'delivery'){
    if(!sameAddress){
      savedAddress = address
      savedContact = contactNum
    } else {
      savedAddress = user.address
      savedContact = user.phone_num
    }
  } else {
      savedAddress = ''
      savedContact = ''
  }

  const createUserOrder = async() => {
    const savedUserOrder = await fetch(
      "http://localhost:3001/order/orderService",
      {
        method: "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({
            userID: user_ID,
            option: selectedOption,
            address: savedAddress,
            contactNumber: savedContact,
            type: 'Laundry',
            items: orderItems()
        })
      }
    )

    const savedOrder = await savedUserOrder.json()
  }

  if (filteredItems.length > 0 && selectedOption !== null){
    if(address !== '' && contactNum !== null)
      proceedOrder = true
    else if (sameAddress === true || selectedOption === 'pickup')
      proceedOrder = true
    else 
      proceedOrder = false
  } else {
    proceedOrder = false
  }
  const validateOrder = () => {
    if(proceedOrder === true){
      createUserOrder();
      navigate('/orderHistory');
      
    }
  }


  console.log(displayAlert)

    return(
       <><Navbar/>
       <Box
            gap="20px"
            sx={{
                margin: 'auto',
                borderRadius: '10px',
                bgcolor: '#ffffff',
                width: '85%',
                height: '50%',
                }}
        >
            <FlexBetween gap="1.75rem" padding="1rem" paddingBottom={0}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline= "hover" color="inherit" href="/" fontWeight='bold' fontSize={20}>
                    Home
                  </Link>
                  <Link underline="hover" color="inherit" href="/laundry" fontWeight='bold' fontSize={20}>
                    Laundry Service
                  </Link>
                  <Typography color="text.primary" fontWeight='bold' fontSize={20}>Order</Typography>
                </Breadcrumbs>
            </FlexBetween>
            <Grid container>
            </Grid>
            <Grid container>
              <Grid xs = {6} sx= {{borderRight:'2px solid black',}}>
                <Grid container p={2}>
                <h2>Service Type</h2>
                  <Grid xs = {12} sx= {{borderBottom:'2px solid #0B4C84'}}>
                    <Grid container sx={{textAlign: 'center', marginBottom:'15%'}}>
                            <Grid xs= {4} >
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (L1 ? '#0B4C84' : '#ffffff'),
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                }}
                                  onClick={() => {setL1(!L1)}}

                                >
                               <img
                                src={LP2}
                                alt="img"
                                style={{ height: '250px', width: '180px' }} />
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L1 ? '#ffffff' : 'black'),
                                      }}
                                  >
                                      Comforters/Blankets
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (L2 ? '#0B4C84' : '#ffffff'),
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    color: "white",
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                
                                }}
                                onClick={() => {setL2(!L2)}}

                                >
                              <img
                                src={LP1}
                                alt="img"
                                style={{ height: '250px', width: '180px' }} />
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L2 ? '#ffffff' : 'black'),
                  
                                      }}
                                  >
                                      Thick/Linen/Curtains
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (L3 ? '#0B4C84' : '#ffffff'),
                                  height: '300px',
                                  width: '70%',
                                  padding: '5%',
                                  border: '1px solid grey',
                                  '&:hover': {
                                    bgcolor: '#7092be',
                                    transform: 'scale(1.1)',
                                    cursor: 'pointer',
                                },
                                
                                }}
                                onClick={() => {setL3(!L3)}}

                                >
                              <img
                                src={LP3}
                                alt="img"
                                style={{ height: '250px', width: '180px' }} />
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L3 ? '#ffffff' : 'black'),
                                      }}
                                  >
                                      Regular Clothing
                              </Typography>
                              </Box>
                            </Grid>
                        </Grid>
                  </Grid>
                  <Grid xs = {12} p={2} sx={{ marginTop:'10%'}}
                        display="column"
                        justifyContent="center"
                        alignItems= "center">
                    <Grid container sx={{marginBottom:'20px'}}>
                      <Box
                        sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: (selectedOption === 'delivery' ? '#0B4C84' : '#fffff'),
                          height: '30px',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          justifyContent:'flex-start',
                          '&:hover': {
                            bgcolor: '#7092be',
                            cursor: 'pointer',
                          },}}
                          display="flex"
                          flexDirection="row"
                          alignItems= "center"
                          onClick ={() => handleOptionChange('delivery')}
                          >
                        <LocalShippingOutlined sx={{ fontSize: '6rem', color: (selectedOption === 'delivery'? '#ffffff' : 'black') }}/>
                        <Typography
                          variant='h4'
                          sx={{flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            color: (selectedOption === 'delivery' ? '#ffffff' : 'black'),}}>
                          For Delivery
                        </Typography>
                        <Checkbox checked={selectedOption === 'delivery'}
                          sx={{ '& .MuiSvgIcon-root': {fontSize: '3rem',},
                                '&.Mui-checked': {color: 'white',}}}/>
                      </Box>
                      {selectedOption === 'delivery' && (
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems= "center"
                          sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: '#ffffff',
                          height: '50%',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          }}
                          gap='20px'>
                          <TextField
                            fullWidth
                            label="Address"
                            defaultValue= {address}
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            onChange = {(e) => setAddress(e.target.value)}
                            disabled = {sameAddress}
                            sx={{
                              "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                                borderColor: "red",
                              },
                           }}
                            />
                          <TextField
                            fullWidth
                            label="Contact No."
                            defaultValue= {contactNum}
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            type ="number"
                            onChange = {(e) => setContactNum(e.target.value)}
                            disabled = {sameAddress}
                            sx={{
                              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                display: "none",
                              },
                              "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                                borderColor: "red",
                              },
                            }}
                            />
                          <FormControlLabel label='Use same address and contact number in profile' 
                              control={<Checkbox checked = {sameAddress} onChange={(event) => setSameAddress(event.target.checked)}/>}/>
                        </Box>
                      )}
                      </Grid>
                      <Grid container>
                      <Box
                        sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: (selectedOption === 'pickup' ? '#0B4C84' : '#fffff'),
                          height: '30px',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          justifyContent:'flex-start',
                          '&:hover': {
                            bgcolor: '#7092be',
                            cursor: 'pointer',
                        },}}
                          display="flex"
                          flexDirection="row"
                          alignItems= "center"
                          onClick={() => handleOptionChange('pickup')}>
                        <StorefrontOutlined sx={{ fontSize: '6rem', color: (selectedOption === 'pickup' ? '#ffffff' : 'black') }}/>
                        <Typography
                          variant='h4'
                          sx={{flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            color: (selectedOption === 'pickup' ? '#ffffff' : 'black')}}
                          >
                          In-Store Pickup
                        </Typography>
                        <Checkbox checked={selectedOption === 'pickup'}
                          sx={{ '& .MuiSvgIcon-root': {fontSize: '3rem' },
                                '&.Mui-checked': {color: 'white',}}}/>
                      </Box>
                      {selectedOption === 'pickup' && (
                        <Box
                          sx={{
                          margin: 'auto',
                          borderRadius: 1,
                          bgcolor: '#ffffff',
                          height: '50%',
                          width: '100%',
                          padding: '5%',
                          border: '2px solid grey',
                          }}>
                          <Typography>
                            Store address
                          </Typography>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs = {6}>
                <Grid container p = {2}>
                  <Grid xs = {12} sx= {{borderBottom:'2px solid #0B4C84'}}>
                    <h1> General Guidelines:</h1>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography> • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                    <Typography sx= {{ marginBottom:'15%'}}> 
                        • Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odit 
                        eaque ex eius? Quisquam enim consectetur 
                        iure dolore a unde quas fuga fugit molestias 
                        maiores quam, eos aspernatur! Distinctio, 
                        quod facilis.</Typography>
                  </Grid>
                <Grid xs = {12} sx={{marginTop:'2%'}}>
                  <h2>PRICE BREAKDOWN:</h2>
                  <Grid container
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems= "center"
                        sx={{
                          textAlign:'center'
                        }}>
                    <Grid xs ={6}>
                      {filteredItems.map((item, index) => (
                        <Typography key = {index}>
                          {item.name}
                        </Typography>
                      ))}
                    </Grid>
                    <Grid xs ={6}>
                      {filteredItems.map((item, index) => (
                        <Typography key = {index}>
                            ₱ {item.price}
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid container
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems= "center"
                      sx={{
                        marginTop: '2%'
                      }}>
                    <Grid xs = {12} sx={{margin: '10% 0 10% 0'}}>
                      <Typography
                        variant='h5'>
                        Estimated Total :  ₱ {estimatedTotal()}
                      </Typography>
                    </Grid>
                    <Grid xs ={12}>
                      <Box
                        sx={{
                          borderRadius: 2,
                          bgcolor: '#0b4c84',
                          height: '10%',
                          width: '100%',
                          padding: '5%',
                          '&:hover': {
                            bgcolor: '#7092be',
                            transform: 'scale(1.1)',
                            cursor: 'pointer',
                          },
                                
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 'bold',
                            color: '#ffffff',
                          }}

                          onClick={() => {
                            if (filteredItems.length > 0 && selectedOption !== null){
                              if(address !== '' && contactNum !== null)
                                  validateOrder()
                              else if (sameAddress === true || selectedOption === 'pickup')
                                  validateOrder()
                              else 
                                  setDisplayAlert(true)
                            }else
                              setDisplayAlert(true)
                            }}
                        >
                              ORDER ⭢
                        </Typography>

                      </Box>
                    </Grid>
                    <Grid xs = {12} sx = {{marginTop : '5%'}}>
                        <Box>
                            {displayAlert === true && (
                          <Alert severity="warning" onClose={() => setDisplayAlert(false)}>
                          <AlertTitle>Warning</AlertTitle>
                            Please select service before ordering.
                          </Alert>)}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
                </Grid>
            </Grid>

        </Box>
        </>
    )
}

export default LaundryOrder
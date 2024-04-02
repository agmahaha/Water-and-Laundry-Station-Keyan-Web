import React, {useState} from 'react'
import { Typography, Box, Grid, Checkbox, TextField, FormControlLabel, Breadcrumbs, Link, Alert, AlertTitle} from '@mui/material'
import {StorefrontOutlined, LocalShippingOutlined} from '@mui/icons-material'
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput'
import Navbar from '../../../components/Navbar'
import FlexBetween from '../../../components/FlexBetween'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import {StyledInputRoot, StyledInputElement, StyledButton} from '../../../components/numberInput'

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: '▴',
        },
        decrementButton: {
          children: '▾',
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const WaterOrder = () => {
  const user = useSelector((state) => state.user)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedWater, setSelectedWater] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [sameAddress, setSameAddress] = useState(false)
  const navigate = useNavigate()

  const itemsOrdered = [
    (selectedService === "round" ? {name: 'Gallon Round', price: 130, qty: quantity, type: selectedWater} : {}),
    (selectedService === "slim" ? {name: 'Gallon Slim', price: 150, qty: quantity, type: selectedWater} : {}),
    (selectedService === "refill" ? {name: 'Refill', price: 20, qty: quantity, type: selectedWater} : {}),
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
    return filteredItems.reduce((total, item) => total + item.price * quantity, 0)
  }

  if(user){
    var user_ID = user._id 
  }

  const orderItems = () => {
    var orderedItems = []

    if(filteredItems != null){
      filteredItems.forEach(item => {
        const itemName = item.name
        const type = 'water'
        if (selectedService !== 'refill'){
          var gallonType = selectedService
        }
        const waterType = selectedWater
        const numberOfItems = quantity
        const pricePerItem = item.price

        if (selectedService !== 'refill')
          orderedItems.push({ itemName, type, gallonType, waterType, numberOfItems, pricePerItem })
        else
          orderedItems.push({ itemName, type, waterType, numberOfItems, pricePerItem })
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

  if (filteredItems !== null && selectedOption !== null){
    proceedOrder = true
  }

  const createUserOrder = async() => {
    const savedUserOrder = await fetch(
      "http://localhost:3001/order/orderService",
      {
        method: "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({
            userID: user_ID,
            address: savedAddress,
            contactNumber: savedContact,
            items: orderItems()
        })
      }
    )

    const savedOrder = await savedUserOrder.json()
  }

  if (filteredItems !== null && selectedOption !== null && selectedWater !== null){
    if(address !== '' && contactNum !== null)
      proceedOrder = true
    else if (sameAddress === true)
      proceedOrder = true
    else 
      proceedOrder = false
  } else {
    proceedOrder = false
  }
  const validateOrder = () => {
    if(proceedOrder === true){
      createUserOrder()
    }
  }

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
                  <Link underline="hover" color="inherit" href="/water" fontWeight='bold' fontSize={20}>
                    Water Service
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
                    <Grid container sx={{textAlign: 'center'}}>
                            <Grid xs= {4} >
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (selectedService === "round" ? '#0B4C84' : '#ffffff'),
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
                                  onClick={() => {setSelectedService('round')}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(selectedService === "round" ? '#ffffff' : 'black'),
                                      }}
                                  >
                                      Gallon Round
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (selectedService === "slim" ? '#0B4C84' : '#ffffff'),
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
                                onClick={() => {setSelectedService('slim')}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(selectedService === "slim" ? '#ffffff' : 'black'),
                  
                                      }}
                                  >
                                      Gallon Slim
                              </Typography>
                              </Box>
                            </Grid>
                            <Grid xs= {4}>
                            <Box
                                sx={{
                                  margin: 'auto',
                                  borderRadius: 3,
                                  bgcolor: (selectedService === "refill" ? '#0B4C84' : '#ffffff'),
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
                                onClick={() => {setSelectedService('refill')}}

                                >
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(selectedService === "refill" ? '#ffffff' : 'black'),
                                      }}
                                  >
                                      Refill
                              </Typography>
                              </Box>
                            </Grid>
                        </Grid>
                        <Grid container sx={{textAlign: 'center', marginTop:'2%'}}>
                            <Grid xs = {4}>
                              <Box
                                  sx={{
                                    margin: 'auto',
                                    borderRadius: 3,
                                    bgcolor: (selectedWater ==='purified' ? '#0B4C84' : '#ffffff'),
                                    height: '20px',
                                    width: '70%',
                                    padding: '5%',
                                    border: '1px solid grey',
                                    '&:hover': {
                                      bgcolor: '#7092be',
                                      transform: 'scale(1.1)',
                                      cursor: 'pointer',
                                  },
                                  }}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems= "center"
                                    onClick={() => {setSelectedWater('purified')}}

                                >
                                  <Checkbox checked={selectedWater === 'purified'}
                                      sx={{ '& .MuiSvgIcon-root': {fontSize: '1rem' },
                                      '&.Mui-checked': {color: 'white',}}}/>
                                  <Typography 
                                    sx={{flexGrow: 1,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      color: (selectedWater === 'purified' ? '#ffffff' : 'black'),}}>
                                    Purified
                                  </Typography>
                                </Box>

                            </Grid>
                            <Grid xs = {4}>
                                <Box
                                  sx={{
                                    margin: 'auto',
                                    borderRadius: 3,
                                    bgcolor: (selectedWater === 'mineral' ? '#0B4C84' : '#ffffff'),
                                    height: '20px',
                                    width: '70%',
                                    padding: '5%',
                                    border: '1px solid grey',
                                    '&:hover': {
                                      bgcolor: '#7092be',
                                      transform: 'scale(1.1)',
                                      cursor: 'pointer',
                                  },
                                  }}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems= "center"
                                    onClick={() => {setSelectedWater('mineral')}}

                                >
                                  <Checkbox checked={selectedWater === 'mineral'}
                                      sx={{ '& .MuiSvgIcon-root': {fontSize: '1rem' },
                                      '&.Mui-checked': {color: 'white',}}}/>
                                  <Typography
                                    sx={{flexGrow: 1,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      color: (selectedWater === 'mineral' ? '#ffffff' : 'black'),}}>
                                    Mineral
                                  </Typography>
                                </Box>
                            </Grid>
                            <Grid xs = {4}>
                                <Box
                                  sx={{
                                    margin: 'auto',
                                    borderRadius: 3,
                                    bgcolor: (selectedWater ==='alkaline' ? '#0B4C84' : '#ffffff'),
                                    height: '20px',
                                    width: '70%',
                                    padding: '5%',
                                    border: '1px solid grey',
                                    '&:hover': {
                                      bgcolor: '#7092be',
                                      transform: 'scale(1.1)',
                                      cursor: 'pointer',
                                  },
                                  }}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems= "center"
                                    onClick={() => {setSelectedWater('alkaline')}}

                                >
                                    <Checkbox checked={selectedWater === 'alkaline'}
                                      sx={{ '& .MuiSvgIcon-root': {fontSize: '1rem' },
                                      '&.Mui-checked': {color: 'white',}}}/>
                                    <Typography
                                      sx={{flexGrow: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: (selectedWater === 'alkaline' ? '#ffffff' : 'black'),}}>
                                      Alkaline
                                    </Typography>
                                </Box>
                              
                            </Grid>
                        </Grid>
                        <Grid conatiner p = {2} 
                          sx={{
                              marginTop:'2%', 
                              marginBottom:'15%',}}
                              display="flex"
                              flexDirection="row"
                              alignItems= "center">
                          <Typography 
                              sx={{
                                fontWeight: 'bold',
                                color:'black',
                                marginRight: '5px'
                            }}>
                            Quantity:
                          </Typography>
                          <NumberInput
                            min={1}
                            value={quantity}
                            onChange={(event, val) => setQuantity(val)}
                            sx={{width: '15%'}}/>
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
                            onChange = {(e) => setContactNum(e.target.value)}
                            disabled = {sameAddress}
                            sx={{
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
                    <Grid xs ={4}>
                      {filteredItems.map((item, index) => (
                        <Typography key = {index}>
                          {item.name} ({item.type})
                        </Typography>
                      ))}
                    </Grid>
                    <Grid xs ={4}>
                      {filteredItems.map((item, index) => (
                        <Typography key = {index}>
                            ₱ {item.price}
                        </Typography>
                      ))}
                    </Grid>
                    <Grid xs ={4}>
                      {filteredItems.map((item, index) => (
                        <Typography key = {index}>
                            {item.qty}
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
                            if (filteredItems !== null && selectedOption !== null){
                              if(address !== '' && contactNum !== null)
                                  validateOrder()
                              else if (sameAddress === true)
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

export default WaterOrder
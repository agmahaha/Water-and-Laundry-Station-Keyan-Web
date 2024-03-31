import React, {useState} from 'react'
import { Typography, Button, Box, Grid, Checkbox, TextField, FormControlLabel, Breadcrumbs, Link} from '@mui/material'
import {StorefrontOutlined, LocalShippingOutlined} from '@mui/icons-material'
import { Unstable_NumberInput as BaseNumberInput,  numberInputClasses, } from '@mui/base/Unstable_NumberInput'
import { styled } from '@mui/system';
import Navbar from '../../../components/Navbar'
import FlexBetween from '../../../components/FlexBetween'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"

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
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWater, setSelectedWater] = useState(null)
  const [L1, setL1] = useState (false)
  const [L2, setL2] = useState (false)
  const [L3, setL3] = useState (false)
  const [quantity, setQuantity] = useState(null);
  const navigate = useNavigate()

  const itemsOrdered = [
    (L1 ? {name: 'Gallon Round', price: 130} : {}),
    (L2 ? {name: 'Gallon Slim', price: 150} : {}),
    (L3 ? {name: 'Refill', price: 20} : {}),
  ]
  const filteredItems = itemsOrdered.filter(item => Object.keys(item).length > 0)

  const handleOptionChange = (option) => {
    setSelectedOption(option)}

  const estimatedTotal = () => {
    return filteredItems.reduce((total, item) => total + item.price, 0)
  }

    return(
       <><Navbar/>
       <Box
            gap="20px"
            sx={{
                margin: 'auto',
                borderRadius: '10px',
                bgcolor: '#ffffff',
                width: '80%',
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
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L1 ? '#ffffff' : 'black'),
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
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L2 ? '#ffffff' : 'black'),
                  
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
                              <Typography
                                      sx={{
                                          fontWeight: 'bold',
                                          color:(L3 ? '#ffffff' : 'black'),
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
                            min={0}
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
                            defaultValue= ''
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            />
                          <TextField
                            fullWidth
                            label="Contact No."
                            defaultValue= ''
                            variant='outlined'
                            InputLabelProps={{ style: {color: 'black'}}}
                            InputProps={{ style: {color: 'black'}}}
                            autoComplete='false'
                            />
                          <FormControlLabel label='Use same address and contact number in profile' 
                              control={<Checkbox/>}/>
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
                        >
                              ORDER ⭢
                        </Typography>
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

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  display: grid;
  grid-template-columns: 70% 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;
    &:hover {
      cursor: pointer;
      background: ${blue[400]};
      color: ${grey[50]};
    }

  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;
    &:hover {
      cursor: pointer;
      background: ${blue[400]};
      color: ${grey[50]};
    }

  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  }
  & .arrow {
    transform: translateY(-1px);
  }
`,
);

export default WaterOrder


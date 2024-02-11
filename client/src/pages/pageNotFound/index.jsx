import React from 'react'
import { Box, Typography, useTheme} from '@mui/material'
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
  const navigate = useNavigate()
  const { palette } = useTheme();
  return (
    <body className='page-not-found-container'>

    <Box bgcolor="white" sx={{ width: '85%', margin: '0 auto', borderRadius: '10px', height:'500px' }}>
            <div className='page-not-found-pad'> 
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <Typography
               sx={{
                color: 'Red',
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
              onClick={() => {
                navigate('/')
              } }
               >
                Return to Home Page
              </Typography>
            </div>
    </Box>
    </body>
    
    
  )
}

export default PageNotFound
import * as React from 'react';
import {Box, Typography} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <>
            <Box sx={{ mt: 2, pt: 3, display: 'flex' , flexDirection: 'column', alignItems: 'center', overflow: 'hidden'}}>
                <CircularProgress />
                <Typography textAlign="center" sx={{ mt: 2 }}>Please Wait !</Typography>
            </Box>
        </>
    )
  }
  
export default Loading
import * as React from 'react';
import {Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = (props) => {

    return (
        <Box sx={{ pt: 3, display: 'flex' , justifyContent: 'center', overflow: 'hidden'}}>
            <CircularProgress />
        </Box>
    )
  }
  
export default Loading
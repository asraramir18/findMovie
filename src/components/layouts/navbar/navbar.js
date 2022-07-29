import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';

import MovieIcon from '@mui/icons-material/Movie';



const ResponsiveAppBar = () => {

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", borderBottom: 1, borderColor: '#72757A', boxShadow: 1  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ display: 'flex'}}>
            <MovieIcon fontSize="large" sx={{ color: '#5F6368' }}/>
            <Typography variant="h1" textAlign="center" sx={{ mx: 2, color: '#5F6368' }}>Movie Finder</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

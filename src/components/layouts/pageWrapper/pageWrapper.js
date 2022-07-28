import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        pt: 6,
        display: 'flex',
        backgroundColor: '#F8F8FF',
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
      }}
    >
        <Grid item xs={12}>
          {children}
        </Grid>
    </Box>
  );
};

export default PageWrapper
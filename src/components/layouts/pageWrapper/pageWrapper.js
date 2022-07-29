import { Box } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        pt: 8,
        display: 'flex',
        backgroundColor: '#F8F8FF',
        flexGrow: 1,
        height: '100vh',
        justifyContent: 'center',
      }}
    >
          {children}
    </Box>
  );
};

export default PageWrapper
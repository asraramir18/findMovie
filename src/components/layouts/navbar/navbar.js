import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
  Divider,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const pages = [{
  value: '/Dashboard',
  label: 'Dashboard'
}, {
  value: '/Alerts',
  label: 'Alerts'
}];
const user = 'Admins';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

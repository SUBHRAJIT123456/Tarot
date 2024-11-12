import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Drawer, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled, keyframes } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import BannerCarousel from '../components/BannerCarousel';
import Logo from '../assets/logo.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const highlightAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  `;

  const StyledButton = styled(Button)(({ theme, selected }) => ({
    color: selected ? '#ffeb3b' : '#ffffff',
    backgroundColor: selected ? '#4a148c' : 'transparent',
    fontWeight: selected ? 'bold' : 'normal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s ease, background-color 0.3s ease, transform 0.3s ease',
    animation: selected ? `${highlightAnimation} 1.5s infinite ease-in-out` : 'none',
    '&:hover': {
      color: '#ffeb3b',
      backgroundColor: '#4a148c',
      transform: 'scale(1.1)',
    },
  }));

  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  
  const menuItems = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <StyledButton component={Link} to="/" selected={location.pathname === '/'}>
        Home
      </StyledButton>
      <StyledButton component={Link} to="/free-reading" selected={location.pathname === '/free-reading'}>
        Free Reading
      </StyledButton>
      <StyledButton component={Link} to="/live-reading" selected={location.pathname === '/live-reading'}>
        Live Reading
      </StyledButton>
      <StyledButton component={Link} to="/profile" selected={location.pathname === '/profile'}>
        Profile
      </StyledButton>
    </Box>
  );

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: '#6a1b9a' }}>
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 1rem',
            }}
          >
           <Typography variant="h6" sx={{ color: '#fff' }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <img 
      src={Logo} 
      alt="Logo" 
      style={{
        width: 60, 
        height: 'auto', 
        marginTop: 10,
        filter: 'brightness(1.5)', 
        boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8)', 
      }} 
    />
  </Link>
</Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
              <StyledButton component={Link} to="/" selected={location.pathname === '/'}>
                Home
              </StyledButton>
              <StyledButton component={Link} to="/free-reading" selected={location.pathname === '/free-reading'}>
                Free Reading
              </StyledButton>
              <StyledButton component={Link} to="/live-reading" selected={location.pathname === '/live-reading'}>
                Live Reading
              </StyledButton>
              <StyledButton component={Link} to="/profile" selected={location.pathname === '/profile'}>
                Profile
              </StyledButton>
            </Box>

           
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#6a1b9a',
            color: 'white',
          },
        }}
      >
        <Box sx={{ padding: '1rem' }}>
          {menuItems}
        </Box>
      </Drawer>

      <BannerCarousel />
    </Box>
  );
};

export default Header;

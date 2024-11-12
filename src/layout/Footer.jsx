import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = () => (
  <Box
    sx={{
      width: '100%',
      py: 2,
      mt: 'auto',
      backgroundColor: '#333',
      textAlign: 'center',
      color: 'white',
    }}
  >
    <Container>
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} Tarot Reading App. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/" color="inherit" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/learn" color="inherit" sx={{ mx: 1 }}>
          Learn
        </Link>
        <Link href="/free-reading" color="inherit" sx={{ mx: 1 }}>
          Free Reading
        </Link>
        <Link href="/live-reading" color="inherit" sx={{ mx: 1 }}>
          Live Reading
        </Link>
        <Link href="/profile" color="inherit" sx={{ mx: 1 }}>
          Profile
        </Link>
      </Box>
    </Container>
  </Box>
);

const StickyButtons = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <Link href="/signin" style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            backgroundColor: '#1976d2',
            padding: '10px 20px',
            borderRadius: 2,
            color: 'white',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#115293',
            },
          }}
        >
          Sign In
        </Box>
      </Link>
      <br />
      <Link href="/signup" style={{ textDecoration: 'none', marginTop: 1 }}>
        <Box
          sx={{
            backgroundColor: '#f50057',
            padding: '10px 20px',
            borderRadius: 2,
            color: 'white',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#c51162',
            },
          }}
        >
          Sign Up
        </Box>
      </Link>
    </Box>
  );
};

export { Footer, StickyButtons };

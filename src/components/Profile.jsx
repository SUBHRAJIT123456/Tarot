
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Box, Typography, Paper, Container, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Profile = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const [updatedDetails, setUpdatedDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  const ProfileHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    animation: `${fadeIn} 1.5s ease-in-out`,
  }));

  const hoverEffect = keyframes`
    0% {
      transform: scale(1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `;

  const capitalizeFirstLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  const firstName = capitalizeFirstLetter(updatedDetails.firstName);
  const lastName = capitalizeFirstLetter(updatedDetails.lastName);

  const handleEditToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
   
    setUpdatedDetails({
      ...editDetails,
    });
    setIsEditing(false);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ background: 'linear-gradient(145deg, #ffffff, #f7f7f7)', height: '100vh', padding: '50px 0' }}>
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          backgroundColor: '#ffffff',
          borderRadius: 4,
          boxShadow: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: `${fadeIn} 1.5s ease-in-out`,
          '&:hover': {
            animation: `${hoverEffect} 2s ease-in-out infinite`,
          },
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <ProfileHeader>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#333',
              animation: `${fadeIn} 1.5s ease-in-out`,
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: '1px',
              transform: 'translateY(10px)',
            }}
          >
            {firstName} {lastName}
          </Typography>
        </ProfileHeader>

        <Box sx={{ width: '100%', marginBottom: 4, animation: `${fadeIn} 2s ease-in-out`, textAlign: 'center' }}>
          {isEditing ? (
            <>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="firstName"
                value={editDetails.firstName}
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="lastName"
                value={editDetails.lastName}
                onChange={handleChange}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={editDetails.email}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={handleSave}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 1,
                  fontSize: '1.1rem',
                  color: '#80cbc4',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#4db6ac',
                  },
                }}
              >
                <strong>First Name:</strong> {firstName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 1,
                  fontSize: '1.1rem',
                  color: '#80cbc4',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#4db6ac',
                  },
                }}
              >
                <strong>Last Name:</strong> {lastName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 2,
                  fontSize: '1.1rem',
                  color: '#80cbc4',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#4db6ac',
                  },
                }}
              >
                <strong>Email:</strong> {updatedDetails.email}
              </Typography>
            </>
          )}
        </Box>

        <Typography
          variant="h6"
          color="primary"
          sx={{
            marginTop: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            animation: `${fadeIn} 2.5s ease-in-out`,
            color: '#333',
            fontFamily: '"Poppins", sans-serif',
            letterSpacing: '1px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Thank you for visiting your profile!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 3,
            width: '100%',
            padding: '12px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#80cbc4',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            },
            animation: `${fadeIn} 3s ease-in-out`,
          }}
          onClick={() => window.location.href = "/"}
        >
          Sign Out
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginTop: 2,
            width: '100%',
            padding: '12px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#80cbc4',
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
          onClick={handleEditToggle}
        >
          {isEditing ? 'Cancel Edit' : 'Edit Details'}
        </Button>
      </Paper>
    </Container>
  );
};

export default Profile;


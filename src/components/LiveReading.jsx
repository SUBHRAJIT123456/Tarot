import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  keyframes,
} from '@mui/material';
import { Favorite as FavoriteIcon, VideoCall as VideoCallIcon } from '@mui/icons-material';

const tarotReaders = [
  {
    id: 1,
    name: 'Alice Moon',
    image: 'https://dnwp63qf32y8i.cloudfront.net/d7ffd5f72e5ce20ff0f8ae37de850466065d5829',
    experience: '10 years of experience in tarot reading and astrology.',
  },
  {
    id: 2,
    name: 'John Tarot',
    image: 'https://images.playground.com/83541f5a476d4c999e3d70c8cc7d36c4.jpeg',
    experience: 'Specializes in career and love readings for 8 years.',
  },
  {
    id: 3,
    name: 'Luna Star',
    image: 'https://topnumerologist.com/assets/images/tarot.webp',
    experience: 'Expert in health and spiritual guidance for over 6 years.',
  },
];

const testimonials = [
  '“Alice’s reading was so insightful! It helped me make a crucial decision in my life.” - Sarah L.',
  '“John gave me clarity on my career path. Highly recommend him!” - Mike R.',
  '“Luna’s guidance on health and well-being is amazing. I feel rejuvenated!” - Rachel S.',
];

const floatingAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LiveReading = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOpen(false);
      alert('Message sent successfully!');
    }, 2000);
  };

  const addFavorite = (reader) => {
    if (!favorites.find((fav) => fav.id === reader.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, reader]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((reader) => reader.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(251, 232, 255), rgba(250, 232, 255))',
          zIndex: -1,
          opacity: 0.3,
          animation: `${floatingAnimation} 6s ease-in-out infinite`,
        }}
      />

      <Typography variant="h4"
  align="center"
  gutterBottom
  sx={{
    fontFamily: "'Cinzel', serif",
    fontSize: '2.5rem',
    color: 'purple',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    letterSpacing: '0.1em',
    position: 'relative',
    '&::before': {
      content: '"🔮"',
      fontSize: '1.5rem',
      color: 'gold',
      position: 'absolute',
      left: '-40px',
      animation: `${floatingAnimation} 5s ease-in-out infinite`,
    },
    '&::after': {
      content: '"🔮"',
      fontSize: '1.5rem',
      color: 'gold',
      position: 'absolute',
      right: '-40px',
      animation: `${floatingAnimation} 5s ease-in-out infinite`,
    },
  }}>
        <br />
        Live Tarot Readings
      </Typography>
      <Typography  variant="body1"
  align="center"
  color="textSecondary"
  paragraph
  sx={{
    fontFamily: "'Cinzel', serif",
    fontSize: '1.2rem',
    color: '#5e3c6d',
    lineHeight: 1.6,
    padding: '0 20px',
    backgroundColor: '#f3e5f5',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: 2,
    marginBottom: 4,
    //display: 'inline-block',
    paddingX: 3,
    '&::before': {
      content: '"✨"',
      fontSize: '1.3rem',
      color: 'gold',
      marginRight: '8px',
    },
    '&::after': {
      content: '"✨"',
      fontSize: '1.3rem',
      color: 'gold',
      marginLeft: '8px',
    },
  }}>
        Connect with our experienced tarot card readers through various online mediums like Zoom, Google Meet, or Skype.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mt: 4 }}>
        {tarotReaders.map((reader) => (
          <Card
            key={reader.id}
            sx={{
              width: 280,
              margin: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 3,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              animation: `${floatingAnimation} 5s ease-in-out ${reader.id * 0.2}s infinite`,
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={reader.image}
              alt={reader.name}
              sx={{ borderRadius: '50%', width: 150, height: 150, mt: 3 }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                {reader.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {reader.experience}
              </Typography>
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={() => addFavorite(reader)}
                sx={{ marginLeft: 8, fontSize: 10, backgroundColor: '#6d0f85' }}
              >
                Add to Favorites
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 5, mb: 4, textAlign: 'center', backgroundColor: '#c84beb', padding: '20px', borderRadius: '12px' }}>
        <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>What Our Clients Say</Typography>
        {testimonials.map((testimonial, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              color: '#fadcf0',
              fontFamily: 'Cinzel, serif',
              fontStyle: 'italic',
              animation: `${fadeIn} 1s ease ${index * 0.3}s forwards`,
              opacity: 0,
              marginBottom: '15px',
            }}
          >
            {testimonial}
          </Typography>
        ))}
      </Box>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5"
  gutterBottom
  align="center"
  sx={{
    fontFamily: "'Cinzel', serif",
    fontSize: '1.5rem',
    color: '#4b2a63',
    backgroundColor: '#f3e5f5',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '15px 30px',
    margin: '20px auto',
    width: 'fit-content',  
    '&::before': {
      content: '"🌟"',
      fontSize: '1.3rem',
      color: 'gold',
      marginRight: '8px',
    },
    '&::after': {
      content: '"🌟"',
      fontSize: '1.3rem',
      color: 'gold',
      marginLeft: '8px',
    },
  }}>
          Favorite Readers
        </Typography>
        {favorites.length > 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
            {favorites.map((reader) => (
  <Card
    key={reader.id}
    sx={{
      width: 220,
      margin: 2,
      padding: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '16px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(135deg, #f3e5f5 0%, #ede7f6 100%)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-30%',
        right: '-30%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)',
        borderRadius: '50%',
        zIndex: -1,
        transition: 'transform 0.3s',
        transform: 'scale(0)',
      },
      '&:hover::before': {
        transform: 'scale(1)',
      },
    }}
              >
                <Typography variant="h6" align="center">
                  {reader.name}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFavorite(reader.id)}
                  sx={{ mt: 1 }}
                >
                  Remove
                </Button>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No favorites added yet.
          </Typography>
        )}
      </Box>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h6"
  align="center"
  sx={{
    fontFamily: "'Cinzel', serif",
    fontSize: '1.3rem',
    color: '#4b2a63',
    backgroundColor: '#ede7f6',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '10px 25px',
    margin: '20px auto',
    width: 'fit-content',  
    '&::before': {
      content: '"🔮"',
      fontSize: '1.3rem',
      color: '#a178df',
      marginRight: '8px',
    },
    '&::after': {
      content: '"🔮"',
      fontSize: '1.3rem',
      color: '#a178df',
      marginLeft: '8px',
    },
  }}>
          Live Reading Available On:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <VideoCallIcon sx={{ fontSize: 40, color: '#0078FF' }} />
            <Typography variant="body2" color="textSecondary">
              Zoom
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <VideoCallIcon sx={{ fontSize: 40, color: '#34A853' }} />
            <Typography variant="body2" color="textSecondary">
              Google Meet
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <VideoCallIcon sx={{ fontSize: 40, color: '#00AFF0' }} />
            <Typography variant="body2" color="textSecondary">
              Skype
            </Typography>
          </Box>
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formValues.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="message"
              label="Message"
              type="text"
              multiline
              rows={4}
              fullWidth
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress size={24} /> : 'Send Message'}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default LiveReading;

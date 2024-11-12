import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f0f0f0',
        padding: '2rem',
        textAlign: 'center', 
      }}
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        
        <Typography 
          variant="h3" 
          sx={{ color: '#6a1b9a', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Unlock the Mystical World of Tarot Card Reading
        </Typography>

       
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#333', 
            marginBottom: '40px', 
            fontStyle: 'italic', 
            fontSize: '18px',
            maxWidth: '800px',
            lineHeight: '1.6',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Tarot card reading is an ancient practice of divination that connects with the energies of the universe. By interpreting the symbolism on each card, Tarot readings can offer insights into your past, present, and future. Whether seeking answers about love, career, or life path, Tarot cards serve as a guide to illuminate your journey and unlock your deepest desires and fears.
        </Typography>

       
        <Typography
          variant="h5"
          sx={{
            color: '#6a1b9a',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          The Significance of Each Card
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '18px',
            maxWidth: '900px',
            lineHeight: '1.6',
            marginBottom: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Tarot cards each hold their own meaning and power. The symbolism behind each card represents different life aspects — from emotions and relationships to the future's potential. By selecting cards in a spread, you're tapping into a powerful energetic exchange, guiding you toward a deeper understanding of yourself and the universe. In every shuffle, there lies the possibility of profound discovery.
        </Typography>

        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            flexWrap: 'wrap', 
            marginBottom: '30px',
          }}
        >
          <Box
            component={motion.div}
            sx={{
              width: '200px',
              height: '300px',
              backgroundImage: 'url(https://m.media-amazon.com/images/I/81M9z+Q1iAL._AC_UF1000,1000_QL80_.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: 2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                paddingTop: '120px',
                fontWeight: 'bold',
              }}
            >
            
            </Typography>
          </Box>

          <Box
            component={motion.div}
            sx={{
              width: '200px',
              height: '300px',
              backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnYKqdt77go-rlxLBcdcfBuYFCiYARcSvqvg9vNhj29wZJs6n3A9Ph93gY0CqCqe057c&usqp=CAU)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: 2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                paddingTop: '120px',
                fontWeight: 'bold',
              }}
            >
             
            </Typography>
          </Box>

          <Box
            component={motion.div}
            sx={{
              width: '200px',
              height: '300px',
              backgroundImage: 'url(https://rukminim2.flixcart.com/image/850/1000/xif0q/card-game/y/a/p/18-the-light-seer-s-tarot-cards-decks-jk-enterprise-original-imagub9ghpjhxjmk.jpeg?q=90&crop=false)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: 2,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                paddingTop: '120px',
                fontWeight: 'bold',
              }}
            >
             
            </Typography>
          </Box>
        </Box>

        <Link to="/free-reading" style={{ textDecoration: 'none' }}>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#6a1b9a', 
            color: 'white', 
            padding: '10px 20px' 
          }}
        >
          Start Your Free Reading
        </Button> </Link>
      </motion.div>
    </Box>
  );
};

export default Home;

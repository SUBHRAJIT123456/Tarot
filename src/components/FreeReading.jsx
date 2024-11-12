import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Box, Card, CardMedia, CardContent, Typography, TextField } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Swal from 'sweetalert2';

const tarotCardImages = [
  { name: 'The Lovers (Relationship)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/RWS_Tarot_06_Lovers.jpg/640px-RWS_Tarot_06_Lovers.jpg', meaning: 'The Lovers card represents union, love, and relationships.' },
  { name: 'The Star (Health)', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg', meaning: 'The Star card symbolizes hope, health, and renewal.' },
  { name: 'The Wheel of Fortune (Finance)', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg', meaning: 'The Wheel of Fortune card signifies luck and fate, often in finances.' },
  { name: 'The Empress (Growth)', image: 'https://mysticalbee.com/wp-content/uploads/2020/01/the-empress-tarot-card.png', meaning: 'The Empress card signifies abundance, growth, and fertility.' },
  { name: 'The Sun (Joy)', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg', meaning: 'The Sun card represents joy, success, and vitality.' },
  { name: 'The Hermit (Wisdom)', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg', meaning: 'The Hermit card represents introspection, wisdom, and solitude.' },
  { name: 'Justice (Balance)', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg', meaning: 'Justice represents fairness, balance, and legal matters.' },
  { name: 'The Fool (New Beginnings)', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg', meaning: 'The Fool card represents new beginnings, spontaneity, and adventure.' }
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #3f51b5, 0 0 20px #3f51b5; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #3f51b5, 0 0 30px #3f51b5; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #3f51b5, 0 0 20px #3f51b5; }
`;

const HeadingSection = styled(Box)({
  textAlign: 'center',
  backgroundColor: '#3f51b5',
  color: '#fff',
  padding: '40px',
  marginBottom: '40px',
  borderRadius: '10px',
  boxShadow: '0px 8px 16px rgba(0,0,0,0.3)',
});

const HeadingText = styled(Typography)({
  fontFamily: 'Cinzel, serif',
  fontWeight: 'bold',
  fontSize: '2rem',
  animation: `${glow} 1.5s ease-in-out infinite`,
});

const StyledCard = styled(Card)({
  position: 'relative',
  overflow: 'hidden',
  animation: `${fadeIn} 1s ease-in-out`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: '16px',
  border: '1px solid #3f51b5',
  width: '345px',
  height: '500px',
});

const StyledFormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f3e5f5',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 12px 24px rgba(63, 81, 181, 0.3)',
  maxWidth: '400px',
  margin: '0 auto',
});

const ShareReadingSection = styled(Box)({
  backgroundColor: '#f3e5f5',
  padding: '20px',
  borderRadius: '20px',
  boxShadow: '0 12px 24px rgba(63, 81, 181, 0.3)',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ReadingSection = ({ title, favoriteLabel1, favoriteLabel2, isVisible }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [favoriteFruit, setFavoriteFruit] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');

  const handleDrawCards = () => {
    if (!favoriteFruit || !favoriteColor) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Type your favorite fruit and color!',
      });
      return;
    }

    const randomCards = [];
    while (randomCards.length < 3) {
      const randomCard = tarotCardImages[Math.floor(Math.random() * tarotCardImages.length)];
      if (!randomCards.find((card) => card.name === randomCard.name)) {
        randomCards.push(randomCard);
      }
    }
    setSelectedCards(randomCards);
  };

  const handleCardClick = (card) => {
    Swal.fire({
      title: card.name,
      text: card.meaning,
      imageUrl: card.image,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: card.name,
    });
  };

  const handleReset = () => {
    setSelectedCards([]);
    setFavoriteFruit('');
    setFavoriteColor('');
  };
  const ShareReadingSection = styled(Box)({
    backgroundColor: '#f3e5f5',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 12px 24px rgba(63, 81, 181, 0.3)',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  return (
    <Container sx={{ display: isVisible ? 'block' : 'none', marginBottom: '30px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography variant="h4" sx={{ color: '#3f51b5', fontFamily: 'Cinzel, serif' }}>{title}</Typography>
        <StyledFormContainer>
          <TextField
            label={favoriteLabel1}
            variant="outlined"
            value={favoriteFruit}
            onChange={(e) => setFavoriteFruit(e.target.value)}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label={favoriteLabel2}
            variant="outlined"
            value={favoriteColor}
            onChange={(e) => setFavoriteColor(e.target.value)}
          />
          <Button variant="contained" color="primary" sx={{ marginTop: '20px' }} onClick={handleDrawCards}>
            Draw Cards
          </Button>
          <Button variant="contained" color="secondary" sx={{ marginTop: '10px' }} onClick={handleReset}>
            Reset
          </Button>
        </StyledFormContainer>

        <Box sx={{ marginTop: '40px' }}>
          {selectedCards.length > 0 && (
            <>
              <Typography variant="h5" sx={{ color: '#3f51b5' }}>Your Tarot Reading</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
                {selectedCards.map((card) => (
                  <StyledCard key={card.name} onClick={() => handleCardClick(card)}>
                    <CardMedia component="img" height="auto" image={card.image} alt={card.name} />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontFamily: 'Cinzel, serif', color: '#3f51b5' }}>{card.name}</Typography>
                    </CardContent>
                  </StyledCard>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

const FreeReading = () => {
  const [showAdditionalSections, setShowAdditionalSections] = useState(false);
  const [shareText, setShareText] = useState('');
  const handleShareClick = () => {
    if (shareText.trim() === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Enter your experience!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Thank you for sharing your experience.',
      confirmButtonText: 'Close',
    }).then(() => {
      setShareText(''); 
    });
  };


  return (
    <Container sx={{ marginBottom: '20px' }}>
      <HeadingSection>
        <HeadingText>Free Tarot Reading</HeadingText>
        <h5>Click The Arrow</h5>
        <Button onClick={() => setShowAdditionalSections(!showAdditionalSections)}>
          {showAdditionalSections ? '▲' : '▼'}
        </Button>
      </HeadingSection>

      <ReadingSection 
  title="💖 Love & Union Tarot Reading" 
  favoriteLabel1="Favorite Fruit" 
  favoriteLabel2="Favorite Color" 
  isVisible={true} 
/>

<ReadingSection 
  title="💼 Destiny of Success: Career Tarot" 
  favoriteLabel1="Favorite Snack" 
  favoriteLabel2="Favorite Season" 
  isVisible={showAdditionalSections} 
/>

<ReadingSection 
  title="🌱 Health & Vitality Tarot Insights" 
  favoriteLabel1="Favorite Hobby" 
  favoriteLabel2="Favorite Animal" 
  isVisible={showAdditionalSections} 
/>

      <ShareReadingSection>
        <Typography  variant="h5" 
  sx={{
    color: '#3f51b5',
    fontFamily: 'Cinzel, serif',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '20px',
    animation: `${glow} 2s ease-in-out infinite`,
    textShadow: '0 0 10px #fff, 0 0 20px #3f51b5, 0 0 30px #3f51b5',
    lineHeight: '1.5',
  }}>
          Unveil the Mysteries of Your Reading
        </Typography>
        <TextField
         label="Share your thoughts on the reading..."
         variant="outlined"
         multiline
         rows={4}
         value={shareText}
         onChange={(e) => setShareText(e.target.value)}
         sx={{ width: '100%', marginTop: '20px' }}
         
        />
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }} onClick={handleShareClick}>Share</Button>
      </ShareReadingSection>
    </Container>
  );
};

export default FreeReading;

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const BannerCarousel = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const goToPrev = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1); 
  };

  
  const goToNext = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Carousel 
        selectedItem={currentSlide} 
        onChange={setCurrentSlide} 
        showThumbs={false} 
        autoPlay 
        infiniteLoop 
        interval={3000}
        showArrows={false}
      >
        <div>
          <img src="https://online-tarot-reader.com/wp-content/uploads/2022/01/cropped-Light-Purple-and-White-Fashion-Back-to-Business-Landscape-Banner1-scaled-2.jpg" alt="Tarot Card 1" />
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/previews/005/978/456/non_2x/a-set-of-mystical-templates-for-tarot-cards-banners-leaflets-posters-brochures-stickers-hand-drawn-the-silhouette-of-the-zodiac-map-stars-moon-and-sun-phases-vector.jpg" alt="Tarot Card 2" />
        </div>
        <div>
          <img src="https://img.freepik.com/premium-vector/set-mystical-templates-tarot-cards-banners-leaflets-posters-brochures-stickers-handdrawn_593483-214.jpg" alt="Tarot Card 3" />
        </div>
      
      </Carousel>
<br/>
      
      <button
        onClick={goToPrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        ←
      </button>

      
      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        →
      </button>
    </div>
  );
};

export default BannerCarousel;


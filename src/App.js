import React from 'react';
import Header from './layout/Header';
import { Footer, StickyButtons } from './layout/Footer'; 
import AppRoutes from '../src/Routes/Approutes'


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <StickyButtons />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import MobileContainer from './components/MobileContainer/MobileContainer';
import BottomNav from './components/BottomNav/BottomNav';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import './App.scss';

// Faltu ke ThemeProvider import ko yahan se hata diya gaya hai.

function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <MobileContainer>
      <main className="content-area">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </MobileContainer>
  );
}

export default MobileApp;

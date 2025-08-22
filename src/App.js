import React from 'react';

// 1. Purane, default CSS import ko hata den.
// import './App.css'; 

// 2. Apne MobileApp component ko sahi path se import karen.
import MobileApp from './DropAppUI/src/MobileApp';

function App() {
  // 3. Faltu ke div aur header tags ko hata den.
  //    Sirf MobileApp ko return karen. Isse kaali patti (black bar) hat jayegi.
  return (
    <MobileApp />
  );
}

export default App;

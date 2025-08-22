import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Sahi App component ko import karen
import App from './App';

// 2. ThemeProvider ko import karen
import { ThemeProvider } from './DropAppUI/src/context/ThemeContext';

// 3. YEH SABSE ZAROORI HAI: Apni global SCSS file ko import karen
//    Iske bina theme ka background color kaam nahi karega
import './DropAppUI/src/assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

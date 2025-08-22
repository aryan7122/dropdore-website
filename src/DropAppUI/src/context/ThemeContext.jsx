import React, { createContext, useState, useEffect, useContext } from 'react';

// This function determines the initial theme
const getInitialTheme = () => {
  // 1. Check if the user has previously saved a theme choice
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }

  // 2. If not, check the user's operating system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // 3. Default to 'light' theme if nothing else is set
  return 'light';
};


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // This code runs every time the 'theme' changes
    // It applies the theme to the main <html> tag
    document.documentElement.setAttribute('data-theme', theme);
    // And saves the user's choice for their next visit
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

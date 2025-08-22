import React from 'react';
import { User, Settings, Bell, Moon, Sun, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './Profile.scss';

const Profile = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          <User size={40} />
        </div>
        <h3>Ramesh Kumar</h3>
        <p>ramesh.k@example.com</p>
      </div>

      <div className="menu-list">
        <div className="menu-item">
          <Settings size={20} className="icon" />
          <span>Account</span>
        </div>
        <div className="menu-item">
          <Bell size={20} className="icon" />
          <span>Notifications</span>
        </div>
        {/* This is the button that calls toggleTheme */}
        <div className="menu-item" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} className="icon" /> : <Sun size={20} className="icon" />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          <div className="toggle-switch">
             <div className={`switch-handle ${theme}`}></div>
          </div>
        </div>
      </div>

      <button className="logout-button">
        <LogOut size={20} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default Profile;

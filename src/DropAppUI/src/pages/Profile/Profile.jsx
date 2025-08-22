import React from 'react';
import { 
  User, Shield, Wallet, Settings, ChevronRight, Edit, MapPin, Repeat, Lock, Clock, 
  Sun, Moon, LogOut 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext'; // Make sure this path is correct for your structure
import './Profile.scss';

// Main Profile Component
const Profile = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="profile-page">
      <ProfileHeader />
      <main className="profile-main-content">
        {/* Section 1: User Info & Identity */}
        <MenuSection title="Account & Identity">
          <MenuItem icon={<MapPin />} title="Manage Addresses" />
          {/* Subtitle removed from here */}
          <MenuItem icon={<Repeat />} title="Switch Role">
            <ToggleSwitch isActive={false} />
          </MenuItem>
        </MenuSection>

        {/* Section 2: Security & Privacy */}
        <MenuSection title="Security & Privacy">
          <MenuItem icon={<Lock />} title="Change Password" />
          <MenuItem icon={<Shield />} title="Two-Factor Authentication" subtitle="Disabled" />
          <MenuItem icon={<Clock />} title="Login History" />
        </MenuSection>

        {/* Section 3: Financial Section */}
        <MenuSection title="Financials">
          <MenuItem icon={<Wallet />} title="Babasaheb Account" subtitle="Balance: ₹5,120" />
          <MenuItem icon={<BookCopy />} title="Transaction History" />
          <MenuItem icon={<IndianRupee />} title="Loan Status" subtitle="No active loans" />
        </MenuSection>

        {/* Section 4: Preferences */}
        <MenuSection title="Preferences">
          {/* Reverted to the working theme toggle */}
          <div className="menu-item" onClick={toggleTheme}>
            <div className="menu-item-icon">
              {theme === 'light' ? <Moon /> : <Sun />}
            </div>
            <div className="menu-item-details">
              <span className="menu-item-title">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <div className="menu-item-action">
              <ToggleSwitch isActive={theme === 'dark'} />
            </div>
          </div>
          <MenuItem icon={<Languages />} title="Language" subtitle="English" />
        </MenuSection>

        <button className="logout-button">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </main>
    </div>
  );
};

// Reusable Components for the Profile Page
const ProfileHeader = () => (
  <header className="profile-header">
    <div className="avatar-wrapper">
      <img src="https://placehold.co/90x90/007aff/ffffff?text=A" alt="User Avatar" className="avatar" />
      <button className="edit-profile-btn"><Edit size={14} /></button>
    </div>
    <h3>Aryan Kumar</h3>
    <p>aryan.k@example.com</p>
  </header>
);

const MenuSection = ({ title, children }) => (
  <div className="menu-section">
    <h4>{title}</h4>
    <div className="menu-items-group">
      {children}
    </div>
  </div>
);

const MenuItem = ({ icon, title, subtitle, children }) => (
  <div className="menu-item">
    <div className="menu-item-icon">{icon}</div>
    <div className="menu-item-details">
      <span className="menu-item-title">{title}</span>
      {subtitle && <small className="menu-item-subtitle">{subtitle}</small>}
    </div>
    <div className="menu-item-action">
      {children ? children : <ChevronRight size={20} className="chevron" />}
    </div>
  </div>
);

const ToggleSwitch = ({ isActive }) => (
  <div className={`toggle-switch small ${isActive ? 'active' : ''}`}>
    <div className="switch-handle"></div>
  </div>
);

// Placeholders for missing icons to prevent errors
const BookCopy = () => <Wallet />; 
const IndianRupee = () => <Wallet />;
const Languages = () => <Settings />;

export default Profile;

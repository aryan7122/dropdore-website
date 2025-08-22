import React from 'react';
import './MobileContainer.scss';
import { Wifi, BatteryFull } from 'lucide-react';

const StatusBar = () => (
  <div className="status-bar">
    <span className="time">9:41 AM</span>
    <div className="indicators">
      <Wifi size={14} />
      <BatteryFull size={16} />
    </div>
  </div>
);


const MobileContainer = ({ children }) => {
  return (
    <div className="mobile-frame">
      <div className="mobile-screen">
        <StatusBar />
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;

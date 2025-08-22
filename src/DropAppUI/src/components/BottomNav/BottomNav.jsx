import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Plus, Search, Map, MessageSquare, Wallet, Heart, PackageSearch } from 'lucide-react';
import './BottomNav.scss';
import clsx from 'clsx';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notchPosition, setNotchPosition] = useState({ left: 0, width: 0 });

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const addRef = useRef(null);

  useEffect(() => {
    let activeRef;
    if (activeTab === 'home') activeRef = homeRef;
    else if (activeTab === 'profile') activeRef = profileRef;
    else if (activeTab) activeRef = addRef;

    if (activeRef && activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setNotchPosition({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  const floatingIcons = [
    { icon: <Search size={22} />, label: 'Search' },
    { icon: <Map size={22} />, label: 'Map' },
    { icon: <MessageSquare size={22} />, label: 'Chat' },
    { icon: <Wallet size={22} />, label: 'Product' },
    { icon: <Heart size={22} />, label: 'Like' },
    { icon: <PackageSearch size={22} />, label: 'Account' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  // find current active floating icon
  const activeFloating = floatingIcons.find(f => f.label === activeTab);

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav">
        <div
          className="nav-notch"
          style={{
            '--notch-left': `${notchPosition.left}px`,
            '--notch-width': `${notchPosition.width}px`,
          }}
        ></div>

        {/* Home */}
        <button
          ref={homeRef}
          className={clsx('nav-item', activeTab === 'home' && 'active')}
          onClick={() => handleTabClick('home')}
        >
          <Home />
          {activeTab === 'home' && <span className="nav-label">Home</span>}
        </button>

        {/* Add + Floating Icons */}
        <div ref={addRef} className="add-button-container">
          <div className={clsx('floating-icons', isMenuOpen && 'open')}>
            {floatingIcons.map((item, index) => (
              <div key={item.label} className="floating-icon-wrapper" style={{ '--i': index }}>
                <button
                  className={clsx('floating-icon', activeTab === item.label && 'active')}
                  onClick={() => handleTabClick(item.label)}
                >
                  {item.icon}
                </button>
                {/* {activeTab === item.label && <span className="floating-label">{item.label}</span>} */}
              </div>
            ))}
          </div>

          {/* Main Button */}
          <button
            className={clsx(
              'nav-item',
              (activeTab && floatingIcons.some(f => f.label === activeTab)) && 'active'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {activeFloating ? (
              <>
                {activeFloating.icon}
                <span className="nav-label">{activeFloating.label}</span>
              </>
            ) : (
              <>
                <Plus size={32} className={clsx('plus-icon', isMenuOpen && 'rotated')} />
              </>
            )}
          </button>
        </div>

        {/* Profile */}
        <button
          ref={profileRef}
          className={clsx('nav-item', activeTab === 'profile' && 'active')}
          onClick={() => handleTabClick('profile')}
        >
          <User />
          {activeTab === 'profile' && <span className="nav-label">Profile</span>}
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;

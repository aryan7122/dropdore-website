import React from 'react';
import { 
  MapPin, Bell, Settings, Search, Mic, TrendingUp, BookCopy, Package, Heart, Star, 
  MessageSquare, IndianRupee, Shield, Repeat, Truck, BrainCircuit, Users, Boxes
} from 'lucide-react';
import './Home.scss';

// Main Home Component
const Home = () => {
  return (
    <div className="unified-homepage">
      <Header />
      <main className="homepage-main-content">
        <SearchAndRecents />
        <AppOverview />
        <DynamicCards />
        <FinancialServices />
        <BusinessIntelligence />
        <VendorSliders />
        <CommunityFeed />
      </main>
    </div>
  );
};

// 1. Top Section: Location and Profile
const Header = () => (
  <header className="homepage-header">
    <button className="location-selector"><MapPin size={16} /><span>Allahabad</span></button>
    <div className="header-actions">
      <button className="icon-button"><Bell size={22} /></button>
      <button className="icon-button"><Settings size={22} /></button>
      <img src="https://placehold.co/40x40/007aff/ffffff?text=A" alt="Profile" className="profile-pic" />
    </div>
  </header>
);

// 2. Search and Recent Activity
const SearchAndRecents = () => (
  <section className="search-section animated-section">
    <div className="search-bar-wrapper">
      <div className="search-bar"><Search size={20} className="search-icon" /><input type="text" placeholder="Search for milk, water, vendors..." /></div>
      <button className="mic-button"><Mic size={22} /></button>
    </div>
    <div className="recent-searches"><span>🥛 Milk</span><span>💧 Water</span><span>🛒 Grocery</span><span>🍪 Bakery</span></div>
  </section>
);

// 3. New App Overview Graph with a realistic Bar Chart
const AppOverview = () => (
  <section className="app-overview-section info-card animated-section" style={{'--delay': 1}}>
    <div className="card-header">
      <div className="card-icon" style={{backgroundColor: '#5856d6'}}><TrendingUp /></div>
      <h4>App Overview</h4>
    </div>
    <div className="card-content">
      <p>Your weekly performance summary.</p>
      <div className="bar-chart-placeholder">
        <div className="bar" style={{height: '60%'}}><span>Mon</span></div>
        <div className="bar" style={{height: '80%'}}><span>Tue</span></div>
        <div className="bar" style={{height: '50%'}}><span>Wed</span></div>
        <div className="bar" style={{height: '70%'}}><span>Thu</span></div>
        <div className="bar" style={{height: '90%'}}><span>Fri</span></div>
        <div className="bar" style={{height: '40%'}}><span>Sat</span></div>
        <div className="bar" style={{height: '65%'}}><span>Sun</span></div>
      </div>
    </div>
  </section>
);

// 4. Dynamic Cards Section
const DynamicCards = () => (
  <section className="dynamic-cards-section">
    <div className="info-card credit-card animated-section" style={{'--delay': 2}}>
      <div className="card-header">
        <div className="card-icon" style={{backgroundColor: '#ff9500'}}><BookCopy /></div>
        <h4>Credit & Payments</h4>
      </div>
      <div className="card-content">
        <div className="credit-row"><span>To Receive:</span><strong className="positive">₹500</strong></div>
        <div className="credit-row"><span>To Pay:</span><strong className="negative">₹200</strong></div>
      </div>
    </div>
    <div className="info-card order-status-card animated-section" style={{'--delay': 3}}>
       <div className="card-header">
        <div className="card-icon" style={{backgroundColor: '#007aff'}}><Package /></div>
        <h4>Order Status</h4>
      </div>
      <div className="card-content">
        <div className="progress-bar">
          <div className="step active"><span>Pending</span></div>
          <div className="step active"><span>Approved</span></div>
          <div className="step"><span>On Way</span></div>
          <div className="step"><span>Delivered</span></div>
        </div>
      </div>
    </div>
  </section>
);

// 5. Financial Services Section
const FinancialServices = () => (
  <section className="financial-services-section animated-section" style={{'--delay': 4}}>
    <h4>Financial Services 🏦</h4>
    <div className="finance-cards-list">
      <FinanceCard icon={<IndianRupee />} title="Micro-Loans" subtitle="Get instant working capital up to ₹50,000 to grow your business." />
      <FinanceCard icon={<Shield />} title="Insurance" subtitle="Secure your health and vehicle with affordable insurance plans starting at just ₹99/month." />
    </div>
  </section>
);

const FinanceCard = ({ icon, title, subtitle }) => (
  <div className="finance-card">
    <div className="finance-icon">{icon}</div>
    <div className="finance-details"><h5>{title}</h5><p>{subtitle}</p></div>
  </div>
);

// 6. Business Intelligence Section
const BusinessIntelligence = () => (
  <section className="business-intelligence-section animated-section" style={{'--delay': 5}}>
    <h4>Business Intelligence 🧠</h4>
    <div className="bi-cards-grid">
      <BiCard icon={<Users />} title="Customer Analytics" subtitle="Understand who your top customers are and what they buy." />
      <BiCard icon={<Boxes />} title="Inventory Management" subtitle="Get alerts for low stock and suggestions for what to order next." />
    </div>
  </section>
);

const BiCard = ({ icon, title, subtitle }) => (
  <div className="bi-card">
    <div className="bi-icon">{icon}</div>
    <div className="bi-details"><h5>{title}</h5><p>{subtitle}</p></div>
  </div>
);

// 7. Nearby & Favorite Shops
const VendorSliders = () => (
  <>
    <section className="vendor-slider-section animated-section" style={{'--delay': 6}}>
      <h4>Top Vendors Nearby ✨</h4>
      <div className="vendor-slider">
        <VendorCard img="https://placehold.co/80x80/5856d6/ffffff?text=RK" name="Ram Kirana Store" rating="4.8" isOnline={true} />
        <VendorCard img="https://placehold.co/80x80/ff3b30/ffffff?text=SB" name="Shree Bakers" rating="4.9" isOnline={true} />
        <VendorCard img="https://placehold.co/80x80/34c759/ffffff?text=FV" name="Fresh Veggies" rating="4.7" isOnline={false} />
      </div>
    </section>
    <section className="vendor-slider-section animated-section" style={{'--delay': 7}}>
      <h4>Your Favorites ❤️</h4>
      <div className="vendor-slider">
        <VendorCard img="https://placehold.co/80x80/007aff/ffffff?text=SW" name="Suresh Water" rating="5.0" isSubscribed={true} isFavorite={true} />
        <VendorCard img="https://placehold.co/80x80/ff9500/ffffff?text=AD" name="Anil Dairy" rating="4.8" isSubscribed={false} isFavorite={true} />
      </div>
    </section>
  </>
);

const VendorCard = ({ img, name, rating, isOnline, isSubscribed, isFavorite }) => (
  <div className="vendor-card">
    <button className={`favorite-btn ${isFavorite ? 'liked' : ''}`}><Heart size={16} /></button>
    <img src={img} alt={name} />
    <h5>{name}</h5>
    <div className="vendor-meta"><Star size={14} className="star-icon"/> {rating}</div>
    {isSubscribed ? (<span className="status subscribed">Subscribed 🔔</span>) : (<span className={`status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</span>)}
  </div>
);

// 8. Community Feed Section
const CommunityFeed = () => (
  <section className="community-feed-section animated-section" style={{'--delay': 8}}>
    <h4>Neighborhood Feed 🏘️</h4>
    <div className="feed-list">
      <FeedItem img="https://placehold.co/40x40/ff9500/ffffff?text=AD" userName="Anil Dairy" action="listed new items" time="2h ago" content="Fresh Paneer and Curd available now! Order before stock runs out." />
      <FeedItem img="https://placehold.co/40x40/5856d6/ffffff?text=RK" userName="Ram Kirana" action="has a new offer" time="5h ago" content="Get 10% off on all biscuit packets today. Use code: TEATIME" />
    </div>
  </section>
);

const FeedItem = ({ img, userName, action, time, content }) => (
  <div className="feed-item">
    <img src={img} alt={userName} className="feed-user-pic" />
    <div className="feed-content">
      <div className="feed-header"><strong>{userName}</strong> {action} · <span className="time">{time}</span></div>
      <p className="feed-body">{content}</p>
      <div className="feed-actions"><button><Heart size={16} /> Like</button><button><MessageSquare size={16} /> Comment</button></div>
    </div>
  </div>
);

export default Home;

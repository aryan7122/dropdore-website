import React from 'react';
import { MapPin, Search, MessageSquare, Bell } from 'lucide-react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="location">
          <MapPin size={18} className="icon" />
          <span>Saidabad, Hyderabad</span>
        </div>
        <button className="search-btn">
          <Bell size={18} />
        </button>
      </header>

      <div className="greeting">
        <h2>Hello, Ramesh!</h2>
        <p>Your interests: <span>Milk, Water, Groceries</span></p>
      </div>

      <div className="pills-container">
        <span className="pill">🍼 Milk Suppliers</span>
        <span className="pill">💧 Water Suppliers</span>
        <span className="pill">🛍️ Grocery Stores</span>
      </div>

      <div className="featured-card">
        <div className="card-header">
          <h3>Anil Dairy</h3>
          <span className="rating">4.8 ⭐</span>
        </div>
        <p className="details">2L Milk @ ₹60 | Delivery: 10 mins</p>
        <p className="sub-details">Daily delivery at 6 AM. Subscribe now!</p>
        <button className="subscribe-btn">Subscribe Now</button>
      </div>

      <h4 className="section-title">Nearby Vendors</h4>
      <div className="vendors-list">
        <div className="vendor-item">
          <div className="vendor-info">
            <div className="vendor-initials" style={{backgroundColor: '#e0f2fe', color: '#0ea5e9'}}>RWS</div>
            <div>
              <p className="vendor-name">Ravi Water Supplier</p>
              <p className="vendor-detail">20L Jar @ ₹50</p>
            </div>
          </div>
           <button className="chat-btn"><MessageSquare size={18}/></button>
        </div>
        <div className="vendor-item">
          <div className="vendor-info">
            <div className="vendor-initials" style={{backgroundColor: '#fef3c7', color: '#f59e0b'}}>LKS</div>
            <div>
              <p className="vendor-name">Local Kirana Store</p>
              <p className="vendor-detail">All grocery items available</p>
            </div>
          </div>
           <button className="chat-btn"><MessageSquare size={18}/></button>
        </div>
      </div>
    </div>
  );
};

export default Home;

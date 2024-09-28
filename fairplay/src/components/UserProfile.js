import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image">
          <img 
            src="https://randomuser.me/api/portraits/women/72.jpg" 
            alt="Mae Shaw" 
          />
        </div>
        <div className="profile-details">
          <h2>Deepanshi</h2>
          <p>@maeshaw</p>
          <p>
            If you like my work, consider supporting me on PayPal and help me
            make a dream come true.
          </p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">74.3M</span>
              <span className="stat-label">Views</span>
            </div>
            <div className="stat">
              <span className="stat-value">17</span>
              <span className="stat-label">Rank</span>
            </div>
            <div className="stat">
              <span className="stat-value">45M</span>
              <span className="stat-label">Downloads</span>
            </div>
          </div>
          <div className="profile-buttons">
            <button className="follow-btn">Follow</button>
            <button className="view-profile-btn">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import dogImage from './Assest/dogImage1.png';


function App() {
  return (
    <div className="container">
       <div className="part1">
        <div className="profile-section">
          <i className="fas fa-user-circle profile-icon"></i>
          <div className="greeting">
            <p>Hello!</p>
            <h3>John William</h3>
          </div>
          <i className="fas fa-comments chat-icon"></i>
        </div>

        <div className="search-section">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="search-input" placeholder="Search here" />
        </div>
       
      </div>
      <div className="part2">
        <div className="card">
          <h1>Let's Find your New Friend</h1>
          <img src={dogImage} alt="Dog" className="dogImage" />
        </div>
        <div className="indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
      <div className="part3">
        {/* Part 3: Add Box */}
        <h2>Add Box</h2>
      </div>
    </div>
  );
}

export default App;
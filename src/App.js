import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
       
      </div>
      <div className="part2">
        {/* Part 2: Let's Find Your New Friend */}
        <h2>Let's Find Your New Friend</h2>
      </div>
      <div className="part3">
        {/* Part 3: Add Box */}
        <h2>Add Box</h2>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';



function App() {
  return (
    <div className="container">
      <div className="part1">
        {/* Part 1: Name and Search Field */}
        <h1>Your Name</h1>
        <input type="text" placeholder="Search..." />
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
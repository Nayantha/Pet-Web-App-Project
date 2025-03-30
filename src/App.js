import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import dogImage from './Assest/dogImage1.png';
import findPetImg from './Assest/find a pet.png';
import listPetImg from './Assest/List a Pet.png';
import findToyImg from './Assest/Find a toy.png';
import findVetImg from './Assest/find a vet.png';
import addServiceImg from './Assest/Add a service.png';


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
        <div className="grid-container">
          <div className="grid-item">
            <img src={findPetImg} alt="Find A Pet" />
            <div className="name-section">
              <h3>Find a Pet</h3>
            </div>
          </div>
          <div className="grid-item">
            <img src={listPetImg} alt="List A Pet" />
            <div className="name-section">
              <h3>List a Pet</h3>
            </div>
          </div>
          <div className="grid-item">
            <img src={findToyImg} alt="Find A Toy" />
            <div className="name-section">
              <h3>Find a Toy</h3>
            </div>
          </div>
          <div className="grid-item">
            <img src={findVetImg} alt="Find A Vet" />
            <div className="name-section">
              <h3>Find a Vet</h3>
            </div>
          </div>
          <div className="grid-item large-item">
            <div className="split-box">
              <div className="split-item">
                <img src={addServiceImg} alt="Add Service" />
                <div className="name-section">
                  <h3>Add Service</h3>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner'
import NewJobOffers from './components/JobOffers/NewJobOffers';
import FeaturedCompanies from './components/FeaturedCompanies';

function App() {
  return (
    <div>
      <Banner />
      <NewJobOffers />
      <FeaturedCompanies />
    </div>
    
  );
}

export default App;

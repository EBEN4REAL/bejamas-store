import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner'
import NewJobOffers from './components/JobOffers/NewJobOffers';
import FeaturedCompanies from './components/FeaturedCompanies';
import Header from './components/Header/Header'



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <NewJobOffers />
      <FeaturedCompanies />
    </div>
    
  );
}

export default App;

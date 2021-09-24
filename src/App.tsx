import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner'
import NewJobOffers from './components/JobOffers/NewJobOffers';
import FeaturedCompanies from './components/FeaturedCompanies';
import Header from './components/Header/Header'
import StoreInfo from './components/StoreInfo'
import Products from './components/Products'


function App() {
  return (
    <div className="mb-5">
      <Header />
      <Banner />
      <StoreInfo />
      <Products />
    </div>
    
  );
}

export default App;

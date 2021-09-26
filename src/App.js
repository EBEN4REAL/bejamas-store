import React from 'react';
import './App.css';
import { useEffect } from 'react'
import axios from 'axios';
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import StoreInfo from './components/StoreInfo'
import Products from './components/Products'
import { getProducts } from "./store/actions/product_actions/productActions"
import { connect } from 'react-redux';


function App(props) {

  useEffect(() => {
    axios.get('https://bejamas-store-default-rtdb.firebaseio.com/products.json')
      .then((res) => {
        props.dispatch(getProducts(res.data))
      })
  }, [])
  return (
    <div className="mb-5">
      <Header />
      <Banner />
      <StoreInfo />
      <Products />
    </div>
    
  );
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(App)



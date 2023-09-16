import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";

  import Header from '../layouts/header'

import Home from '../pages/home/home'
import Products from '../pages/products/products';
import Categories from '../pages/categories/categories';
import Cart from '../pages/cart/cart';
import ProductOverview from '../pages/poroductOverview/productOverview';
import Collection from '../pages/collection/collection';
import Checkout from '../pages/checkout/checkout';
import BestSeller from '../pages/bestSeller/bestSeller';
import Signup from '../pages/signup/signup';
import WithHeader from './withHeader';
import Login from '../pages/login/login';

function Routing() {
  return (

      <Router>
       
        <Routes>
          <Route path="/" element={<WithHeader><Home/></WithHeader>}></Route>
          <Route path="/products" element={<WithHeader><Products /></WithHeader>}></Route>
          <Route path="/categories" element={<WithHeader><Categories /></WithHeader>}></Route>
          <Route path="/cart" element={<WithHeader><Cart /></WithHeader>}></Route>
          <Route path="/productOverview" element={<WithHeader><ProductOverview /></WithHeader>}></Route>
          <Route path="/collections" element={<WithHeader><Collection /></WithHeader>}></Route>
          <Route path="/checkout" element={<WithHeader><Checkout /></WithHeader>}></Route>
          <Route path="/bestsellers" element={<WithHeader><BestSeller /></WithHeader>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>

   
  )
}

export default Routing
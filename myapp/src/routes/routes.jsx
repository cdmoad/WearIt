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

function Routing() {
  return (

      <Router>
         <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
        </Routes>
      </Router>

   
  )
}

export default Routing
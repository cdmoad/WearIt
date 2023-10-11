import React,{Suspense, lazy} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
  } from "react-router-dom";

   
  import Header from '../layouts/header'
  // import Spinner from '../components/Loader/spinner'
  import Dots from '../components/Loader/dots'

import Home from '../pages/home/home'

// const Products = lazy(() => import('../pages/products/products'));
import Products from '../pages/products/products';

// const Categories = lazy(() => import('../pages/categories/categories'));
import Categories from '../pages/categories/categories';

// const Cart = lazy(() => import('../pages/cart/cart'));
import Cart from '../pages/cart/cart';

// const ProductOverview = lazy(() => import('../pages/poroductOverview/productOverview'));
import ProductOverview from '../pages/poroductOverview/productOverview';

// const Collection = lazy(() => import('../pages/collection/collection'));
import Collection from '../pages/collection/collection';

// const Checkout = lazy(() => import('../pages/categories/categories'));
import Checkout from '../pages/checkout/checkout';

// const BestSeller = lazy(() => import('../pages/bestSeller/bestSeller'));
import BestSeller from '../pages/bestSeller/bestSeller';

// const Signup = lazy(() => import('../pages/signup/signup'));
import Signup from '../pages/signup/signup';

// const Login = lazy(() => import('../pages/login/login'));
import Login from '../pages/login/login';

import WithHeader from './withHeader';

// const Dashboard = lazy(() => import('../pages/dashboard/seller'));
import DashboardSeller from '../pages/dashboard/seller';

// const PageNotFound = lazy(() => import('../pages/ErrorPages/pageNotFound'));
import PageNotFound from '../pages/ErrorPages/pageNotFound';

// const AboutUs = lazy(()=> import('../pages/aboutUs/aboutUs'));
import AboutUs from '../pages/aboutUs/aboutUs';

import DashboardAdmin from '../pages/dashboard/admin';


function Routing() {
  return (

     
      <Router>
       {/* <Suspense fallback={<Dots/>}> */}
        <Routes>
          <Route path="/" element={<WithHeader><Home/></WithHeader>}></Route>
          <Route path="/products" element={<WithHeader><Products /></WithHeader>}></Route>
          <Route path="/categories" element={<WithHeader><Categories /></WithHeader>}></Route>
          <Route path="/cart" element={<WithHeader><Cart/></WithHeader>}></Route>
          <Route path="/product/:id" element={<WithHeader><ProductOverview /></WithHeader>}></Route>
          <Route path="/collections" element={<WithHeader><Collection /></WithHeader>}></Route>
          <Route path="/checkout" element={<WithHeader><Checkout /></WithHeader>}></Route>
          <Route path="/bestsellers" element={<WithHeader><BestSeller /></WithHeader>}></Route>
          <Route path="/about" element={<WithHeader><AboutUs /></WithHeader>}></Route>
          {/* Dashboard */}
          <Route path="/dashboard/*" element={<DashboardSeller/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
       {/* </Suspense> */}
      </Router>
     
    

  )
}

export default Routing
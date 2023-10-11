import React,{useState} from 'react'
import SideMenu from './layout/sideMenu'
import Users from './users/users'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound'
import Statistics from './statistics/statistics'
import Header from './layout/header'
import './index.css'
import Products from './products/products'


function Index() {
 
 
 

  return (
    <div className="">
 
      <SideMenu   /> 

      <div className='flex justify-between'>

         <div className='space-taker hidden md:block'></div>  
 
         <div className="main-dashboard    "   > 
         <Header   />
         <div className="px-4 py-4 ">
         <Routes>
          
        <Route path="/users" element={ <Users/>} />   
        <Route path="/statistics" element={ <Statistics/>} />   
        <Route path="/products" element={ <Products/>} />   
        <Route path="/*" element={<PageNotFound />} />  
       </Routes>  
       </div> 
        </div>

       
    
   
      </div>
      
   </div>
  )
}

export default Index
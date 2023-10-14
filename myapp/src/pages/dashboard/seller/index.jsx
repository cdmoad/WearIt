import React from 'react'
import SideMenu from './layout/sideMenu'
import Statistic from './Statistics/index'
import Products from './products/products'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound';
import './index.css'
import Header from './layout/header'
import AddProduct from './products/addProduct'
 

function Dashboard() {
  return (
     <div className="bg-slate-50">
    
        <SideMenu/> 
   
        <div className='flex justify-between'>

         <div className='space-taker hidden md:block'></div>  
 
         <div className="main-dashboard    "   > 
         <Header   />
         <div className="px-4 py-4 ">
         <Routes>

          <Route path="/statistics" element={ <Statistic/>} /> 
          <Route path="/products" element={ <Products/>} />  
          <Route path="/addproduct" element={ <AddProduct/>} />  
          <Route path="/*" element={<PageNotFound />} />  
         </Routes>   
          </div>

          </div>
      
     
        </div>
        
     </div>
  )
}

export default Dashboard
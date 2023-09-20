import React from 'react'
import SideMenu from './layout/sideMenu'
import Statistic from './Statistics/index'
import Products from './products/index'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound';
import './seller.css'

function Dashboard() {
  return (
     <div className=" ">
      <div >
        <SideMenu/> 
      </div>
        
        <div className='flex justify-between'>
           <div className='space-taker'></div>

          <div  className='main-dashboard px-4 py-4'>
            <Routes>
          <Route path="/statistics" element={ <Statistic/>} /> 
          <Route path="/products" element={ <Products/>} />  
          <Route path="/*" element={<PageNotFound />} />  
         </Routes>   
          </div>

         
      
     
        </div>
        
     </div>
  )
}

export default Dashboard
import React from 'react'
import SideMenu from './layout/sideMenu'
import Statistic from './Statistics/index'
import Products from './products/index'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound';

function Dashboard() {
  return (
     <div className="flex justify-between">
      <div >
        <SideMenu/> 
      </div>
        
        <div className=''>
         <Routes>
          <Route path="/statistics" element={ <Statistic/>} /> 
          <Route path="/products" element={ <Products/>} />  
          <Route path="/*" element={<PageNotFound />} />  
         </Routes>
     
        </div>
        
     </div>
  )
}

export default Dashboard
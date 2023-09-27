import React from 'react'
import SideMenu from './layout/sideMenu'
import Users from './users/users'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound'
import Statistics from './statistics/statistics'
import Header from './layout/header'
import './index.css'


function Index() {
  return (
    <div className=" ">
    <div >
      <SideMenu/> 
    </div>
   
      <div className='flex justify-between'>
       
         <div className='space-taker'></div>
        <div  className="main-dashboard" > 
         <Header/>
         <div className="px-4 py-4 ">
          <Routes>
        <Route path="/users" element={ <Users/>} />   
        <Route path="/statistics" element={ <Statistics/>} />   
        <Route path="/*" element={<PageNotFound />} />  
       </Routes>  
       </div> 
        </div>

       
    
   
      </div>
      
   </div>
  )
}

export default Index
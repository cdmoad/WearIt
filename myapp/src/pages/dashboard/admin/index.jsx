import React,{useState} from 'react'
import SideMenu from './layout/sideMenu'
import Users from './users/users'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from '../../ErrorPages/pageNotFound'
import Statistics from './statistics/statistics'
import Header from './layout/header'
import './index.css'


function Index() {
 
  const [toggleMenu,setToggleMenu]=useState(false);
 



  return (
    <div className=" ">
 
      <SideMenu  toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} /> 
  
   
      <div className='flex justify-between'>
       
       {toggleMenu ?  <div className='space-taker none md:block'></div> : null }

        <div  className={`main-dashboard ${toggleMenu ? null : 'w-full' }  `} > 
         <Header toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu} />
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
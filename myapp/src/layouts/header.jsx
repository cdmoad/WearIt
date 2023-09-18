import React, { useState,useContext } from 'react';
import logo from "../assets/logos/wearit-logo-2-icon.png"
import {Link} from 'react-router-dom'
import cart from "../assets/icons/cart.png"
import { CartContext } from '../contexts/cartContext'

function Header() {

  const { toggleCart } = useContext(CartContext);

  const [toggleSideNav, setToggleSideNav] = useState(false);

  return (


    <>
 

    <header class="bg-white  sticky top-0 z-10">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
        <Link to='/'>
      <a class="block text-teal-600" href="/">
        <span class="sr-only">Home</span>
        <img src={logo} alt="" height="50" width="50" />
      </a>
      </Link>
      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
            <Link to='/products'>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Products
              </a>
              </Link>
            </li>
  
            <li>
            <Link to='/categories'>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Categories
              </a>
              </Link>
            </li>
  
            <li>
            <Link to='/collections'>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Collections
              </a>
              </Link>
            </li>

            <li>
            <Link to='/bestsellers'>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Best Sellers
              </a>
            </Link>
            </li>

            <li>
            <Link to='/dashboard/statistics'>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">
                Dashboard
              </a>
            </Link>
            </li>
  
            
          </ul>
        </nav>
  
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <Link to="/login">
            <a
              class="block rounded-md bg-custom-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
            >
              Login
            </a>
            </Link>
  
  <Link to="/signup">
       <a
              class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-custom-black transition hover:text-black sm:block"
              href="/"
            >
              Register
            </a>
  </Link>
         

            <a
              class="hidden rounded-md cursor-pointer transition-all hover:scale-105    py-2.5 text-sm font-medium text-custom-black   hover:text-black sm:block"
              
              onClick={toggleCart}
            >
              <img src={cart} alt="" height={22} width={22} />
            </a>
          </div>
  
          <button
            onClick={()=>setToggleSideNav(!toggleSideNav)} class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

{toggleSideNav ? 
(
  <div class="min-h-screen fixed z-50 top-0 left-0" onClick={()=>setToggleSideNav(false)}>
 
 <div class="absolute left-0 flex h-screen w-72 flex-col overflow-hidden shadow-2xl bg-custom-black text-white">
   <h1 class="mt-10 ml-10 text-3xl font-bold">WearIt</h1>
   <ul class="mt-20 space-y-3">
    <Link to="/products">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span
       ><span class="">Products</span>
     </li>
     </Link>
     <Link to="/categories">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 font-semibold hover:bg-slate-600">
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></span
       ><span class="">Categories</span>
     </li>
     </Link>
     <Link to="/collections">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></span
       ><span class="">Collections</span>
     </li>
     </Link>
     <Link to="/bestsellers">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
       <span class="text-2xl"
         ><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
           <path fill="currentColor" d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3a3.08 3.08 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.11 3.11 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z" class="clr-i-outline clr-i-outline-path-1" />
           <circle cx="23.01" cy="20" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-2" />
           <path fill="none" d="M0 0h36v36H0z" /></svg></span
       ><span class="">Best Sellers</span>
     </li>
     </Link>
     <Link to="/dashboard/statistics">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
      
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></span
       ><span class="">Dashboard</span>
       
     </li>
     </Link>
     <Link to="/signup">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></span
       ><span class="">Register</span>
     </li>
     </Link>
     <Link to="/settings">
     <li class="relative flex cursor-pointer space-x-2 rounded-md py-3 px-10 text-gray-300 hover:bg-slate-600">
       <span
         ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
           <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span
       ><span class="">Settings</span>
     </li>
     </Link>
   </ul>

   
 </div>

</div>

) : null}

  

  </>


  )
}

export default Header
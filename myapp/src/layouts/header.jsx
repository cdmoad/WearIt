import React, { useContext } from 'react';
import logo from "../assets/logos/wearit-logo-2-icon.png"
import {Link} from 'react-router-dom'
import cart from "../assets/icons/cart.png"
import { CartContext } from '../contexts/cartContext'

function Header() {

  const { toggleCart } = useContext(CartContext);

  return (
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
            class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
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
  )
}

export default Header
import React from 'react'
import Card from './card'
import Cart from '../../components/cart/cart'

function BestSeller() {
  return (
    <>
     <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div class="grid  grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Nike</h2>

            <p class="mt-4 text-gray-500">
             best Nike sells this month, dicover what Nike is offering you this month
            </p>
          </header>

          <a
            href="#"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div class="lg:col-span-2  ">
        <ul class="grid grid-cols-2 gap-4 justify-items-center" >
         <Card/>
         <Card/>
        </ul>
      </div>
      <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Nike</h2>

            <p class="mt-4 text-gray-500">
             best Nike sells this month, dicover what Nike is offering you this month
            </p>
          </header>

          <a
            href="#"
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div class="lg:col-span-2  ">
        <ul class="grid grid-cols-2 gap-4 justify-items-center">
         <Card/>
         <Card/>
        </ul>
      </div>
    </div>
  </div>
</section>

<Cart/>
  
    </>
   
  )
}

export default BestSeller
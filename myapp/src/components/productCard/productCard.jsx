import React from 'react'
import './productCard.css'

function ProductCard() {
  return (
    <div href="#" class="group block overflow-hidden productCard-container">
  <div class="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div class="relative bg-white pt-3">
    <h3
      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      Limited Edition Sports Trainer
    </h3>

    <div class="mt-1.5 flex items-center justify-between text-gray-900">
      <p class="tracking-wide">$189.99</p>

      <p class="text-xs uppercase tracking-wide">6 Colors</p>
    </div>
  </div>
</div>
  )
}

export default ProductCard
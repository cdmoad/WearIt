import React from 'react'


function Card({title,image,text}) {
  return (
    <a href="#" class="group relative block bg-black">
    <img
      alt="Developer"
      src={image}
      class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />
  
    <div class="relative p-4 sm:p-6 lg:p-8">
      <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
        Category
      </p>
  
      <p class="text-xl font-bold text-white sm:text-2xl">{title}</p>
  
      <div class="mt-32 sm:mt-48 lg:mt-64">
        <div
          class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p class="text-sm text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  </a>
  )
}

export default Card
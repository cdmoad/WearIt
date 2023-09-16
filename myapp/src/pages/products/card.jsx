import React from 'react'

function Card({title, price, image,description}) {
  return (
    <li>
    <a href="/productOverview" class="group block overflow-hidden">
      <img
        src={image}
        alt=""
        class="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div class="relative bg-white pt-3">
        <h3
          class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
         {title}
        </h3>

        <p class="mt-2">
          <span class="sr-only"> {description}</span>

          <span class="tracking-wider text-gray-900"> £{price} </span>
        </p>
      </div>
    </a>
  </li>
  )
}

export default Card
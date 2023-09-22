import React from 'react'

function Card({title, price, image,description}) {
  return (
    <li>
    <a href="/productOverview" className="group block overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative bg-white pt-3">
        <h3
          className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
         {title}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> {description}</span>

          <span className="tracking-wider text-gray-900"> £{price} </span>
        </p>
      </div>
    </a>
  </li>
  )
}

export default Card
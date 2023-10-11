import React from 'react'
import { Link } from 'react-router-dom'

function Card({id,title, price, image}) {
  return (
    <li>
    <Link to={`/product/${id}`} className="group block overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-[260px] w-full object-contain transition duration-500 group-hover:scale-105 "
      />

      <div className="relative bg-white pt-3">
        <h3
          className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
         {title}
        </h3>

        <p className="mt-2">
          <span className="">  </span>
          <span className="tracking-wider text-gray-900"> {price}DH </span>
        </p>
      </div>
    </Link>
  </li>
  )
}

export default Card
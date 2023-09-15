import React from 'react'
import './banner.css';
 
function Banner({title1,title2,text}) {
  return (

<section
  class="relative banner-section bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
        {title1}

        <strong class="block font-extrabold text-custom-black white-text-shadow">
          {title2}
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white black-text-shadow">
         {text}
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-custom-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Explore Collections
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-custom-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner
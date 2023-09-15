import React from 'react'
import './banner.css';
import {motion} from "framer-motion"
 
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
      <motion.h1 class="text-3xl text-white font-extrabold sm:text-5xl " initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
 >
          {title1}
        <strong class="block font-extrabold text-custom-black white-text-shadow">
          {title2}
        </strong>
      </motion.h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white black-text-shadow">
         {text}
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <motion.a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-custom-black shadow hover:bg-custom-black focus:outline-none focus:ring active:bg-rose-500 hover:text-white sm:w-auto"
          initial={{y:"100px"}}
          animate={{y:"0"}}
          transition={{duration:1.3}}
          
        >
          Explore Collections
        </motion.a>

        <motion.a
          href="#"
          class="block w-full rounded bg-custom-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-custom-black focus:outline-none focus:ring active:text-custom-black sm:w-auto"
          initial={{y:"100px"}}
          animate={{y:"0"}}
          transition={{duration:1.3}}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner
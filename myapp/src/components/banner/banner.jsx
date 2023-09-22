import React from 'react'
import './banner.css';
import {motion} from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
 
function Banner({title1,title2,text,image}) {



  const containerStyle = {
    backgroundImage: `url(${image})`
  };

  return (

 
<section
  className="relative banner-section bg-cover bg-center bg-no-repeat"
  style={containerStyle}
>
  {/* <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div> */}

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
      <motion.h1 className="text-3xl text-white font-extrabold sm:text-5xl " initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
 >
          {title1}
        <strong className="block text-2xl my-2 leading-10 font-extrabold text-custom-black white-text-shadow">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        title2,
        1000, // wait 1s behtmlFore replacing "Mice" with "Hamsters"
        'Discover Your New Look',
        1000,
        'Get Ready to Shine',
        1000,
        'Dress to Impress',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </strong>
      </motion.h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white black-text-shadow">
         {text}
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link to="/collections" className='w-full sm:w-auto'>
        <motion.a
          href="#"
          className="block   rounded bg-white px-12 py-3 text-sm font-medium text-custom-black shadow hover:bg-custom-black focus:outline-none focus:ring   hover:text-white sm:w-auto"
          initial={{y:"100px"}}
          animate={{y:"0"}}
          transition={{duration:1.3}}
          
        >
          Explore Collections
        </motion.a>
        </Link>

        <motion.a
          href="#"
          className="block w-full rounded bg-custom-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-custom-black focus:outline-none focus:ring active:text-custom-black sm:w-auto"
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
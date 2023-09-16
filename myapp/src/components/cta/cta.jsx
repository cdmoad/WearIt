import React from 'react'
import girlYellobg from "../../assets/images/caucasian-teenage-girl-yellow-background-stylish-young-woman-with-shopping-bags-hands.jpg"
import aiHead from "../../assets/images/ai-generated-concept-human.jpg"
import { Link } from 'react-router-dom'


function Cta() {
  return (

    <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-custom-black p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
          Elevate Your Wardrobe with Elegance
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
          Immerse yourself in a world of sophistication and style. Our curated selection of exquisite fashion pieces is designed to empower your personal expression. Whether you seek the latest haute couture trends or timeless classics, our collection caters to the discerning tastes of the modern fashion connoisseur.
          </p>
          

          <div class="mt-4 md:mt-8">
            <Link to="/categories">
            <a
              href="#"
              class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-custom-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Discover Your Style
            </a>
            </Link>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src={aiHead}
           class="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src={girlYellobg}
           class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Cta
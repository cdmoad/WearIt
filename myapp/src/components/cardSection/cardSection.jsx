import React from 'react'
import ProductCard from "../productCard/productCard"

function CardSection() {
  return (
     <section className='cards-container flex flex-wrap gap-1 justify-around '>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      
     </section>
  )
}

export default CardSection
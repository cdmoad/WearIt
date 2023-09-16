import React from 'react'
import Card from './card'
import Cart from '../../components/cart/cart'
import Shirt from '../../assets/images/categories/shirt.jpg'
import Sweater from '../../assets/images/categories/sweater.jpg'
import Jacket from '../../assets/images/categories/jacket.jpg'
import Pants from '../../assets/images/categories/pants.jpg'
import Shorts from '../../assets/images/categories/shorts.jpg'
import Shoes from '../../assets/images/categories/shoes.jpg'
import Hat from '../../assets/images/categories/hat.jpg'
import Accessories from '../../assets/images/categories/sun-glasses.jpg'


function Categories() {
  return (
    <div className='grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10'>
     <Card title="Shirt" image={Shirt} text="Shirts Section, a place where you can find all types of shirts you like" />
      <Card title="Sweater" image={Sweater} text="Sweaters Section, a place where you can find all types of sweaters you like" />
      <Card title="Jacket" image={Jacket} text="Jackets Section, a place where you can find all types of jackets you like" />
      <Card title="Pants" image={Pants} text="Pants Section, a place where you can find all types of pants you like" />
      <Card title="Shorts" image={Shorts} text="Shorts Section, a place where you can find all types of shorts you like" />
      <Card title="Shoes" image={Shoes} text="Shoes Section, a place where you can find all types of shoes you like" />
      <Card title="Hat" image={Hat} text="Hats Section, a place where you can find all types of hats you like" />
      <Card title="Accessories" image={Accessories} text="Accessories Section, a place where you can find all types of accessories you like" />

      
      <Cart/> 
    </div>
  
  )
}

export default Categories
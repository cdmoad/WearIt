
import React from 'react'
import Card from './card'
import Cart from '../../components/cart/cart'

function Collection() {
  return (
    <div className='grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        <Cart/>
    </div>
  )
}

export default Collection
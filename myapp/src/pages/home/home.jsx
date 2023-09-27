import React from 'react'
import Header from '../../layouts/header'
import Banner from '../../components/banner/banner'
import Cta from '../../components/cta/cta'
import CardSection from '../../components/cardSection/cardSection'
import Footer from '../../layouts/footer'
import Collection from '../../components/collection/collection'
import CarouselSlider from '../../components/carousel/carousel'
import Cart from '../../components/cart/cart'

function Home() {
  return (
    <>


    {/* <Banner title1="WearIt" title2="Shop the Latest Trends" text="Welcome to our fashion store, where style meets comhtmlFort! Explore our collection, from classics to trends. Discover clothing that looks great and feels amazing. Start your style journey today!" /> */}
    <CarouselSlider/>
    <Cta/>
    {/* <CardSection/> */}
    <Collection/>
    <Footer/>

    <Cart/>
      

    </>
  )
}

export default Home
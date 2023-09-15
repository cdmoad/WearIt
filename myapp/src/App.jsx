import { useState } from 'react'
import './App.css'
import Header from './layouts/header'
import Banner from './components/banner/banner'
import Cta from './components/cta/cta'
import CardSection from './components/cardSection/cardSection'
import Footer from './layouts/footer'
 

function App() {
 
  return (
    <>

    <Header/>
    <Banner title1="WearIt" title2="Shop the Latest Trends" text="Welcome to our fashion store, where style meets comfort! Explore our collection, from classics to trends. Discover clothing that looks great and feels amazing. Start your style journey today!" />
    <Cta/>
    <CardSection/>
    <Footer/>
      
    </>
  )
}

export default App

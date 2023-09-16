import React from 'react'
import { Carousel } from 'antd';
import Banner from '../banner/banner';
import image2 from '../../assets/backgrounds/cute-woman-bright-hat-purple-blo.jpg'
import image3 from '../../assets/backgrounds/happy-young-joyful-woman-hides-e.jpg'
import image1 from '../../assets/backgrounds/shirt-mockup-concept-with-plain-.jpg'


function CarouselSlider() {

    // const contentStyle = {
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     backgroundImage: '#364d79',

    //   };

  return (
    <Carousel   effect="fade" autoplay='true'>
    <div>
    <Banner title1="WearIt" title2="Shop the Latest Trends" text="Welcome to our fashion store, where style meets comfort! Explore our collection, from classics to trends. Discover clothing that looks great and feels amazing. Start your style journey today!" image={image1}/>
    </div>
    <div>
    <Banner title1="WearIt" title2="Shop the Latest Trends" text="Welcome to our fashion store, where style meets comfort! Explore our collection, from classics to trends. Discover clothing that looks great and feels amazing. Start your style journey today!" image={image2}/>
    </div>
    <div>
     <Banner title1="WearIt" title2="Shop the Latest Trends" text="Welcome to our fashion store, where style meets comfort! Explore our collection, from classics to trends. Discover clothing that looks great and feels amazing. Start your style journey today!" image={image3}/>
    </div>
   
  </Carousel>

   
  )
}

export default CarouselSlider
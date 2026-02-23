import React from 'react'

import WhyWeExist from '../components/WhyWeExist'
import Services from '../components/Services'
import ImpactInAction from '../components/ImpactInAction'
import Blog from '../components/Blog'
import Whatsnext from '../components/WhatsNext'
import Hero from '../components/Hero'
import Faqs from '../components/FAQs'
import Reviews from '../components/Reviews'
import { Helmet } from 'react-helmet'; 
const HomePage = () => {
  return (
    <div>
       <Helmet>
        <title>Container Shipping for Furniture in the UAE</title>
        <meta 
          name="description" 
          content="Reliable container shipping for furniture in the UAE with secure packing, fast delivery, and affordable rates." 
        />
      </Helmet>
      <Hero/>
      <ImpactInAction/>
      <WhyWeExist/>
      <Services/>
      <Whatsnext/>
      <Blog/>
      <Reviews/>

    </div>
  )
}

export default HomePage

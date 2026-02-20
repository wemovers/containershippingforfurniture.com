import React from 'react'

import WhyWeExist from '../components/WhyWeExist'
import Services from '../components/Services'
import ImpactInAction from '../components/ImpactInAction'
import Blog from '../components/Blog'
import Whatsnext from '../components/WhatsNext'
import Hero from '../components/Hero'
import Faqs from '../components/FAQs'
import Reviews from '../components/Reviews'
const HomePage = () => {
  return (
    <div>
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

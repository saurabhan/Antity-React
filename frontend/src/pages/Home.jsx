import React from 'react'
import CategoryListing from '../components/CategoryListing/CategoryListing'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CategoryListing/>
      <FeaturedProducts/>
      <Newsletter/>
    </div>
  )
}

export default Home

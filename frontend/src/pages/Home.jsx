import React from 'react'
import CategoryListing from '../components/CategoryListing/CategoryListing'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CategoryListing/>
      <FeaturedProducts/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

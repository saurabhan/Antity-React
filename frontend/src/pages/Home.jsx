import React from 'react'
import CategoryListing from '../components/CategoryListing/CategoryListing'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import { useCart } from '../context/CartContext'

const Home = () => {
  const {products} = useCart()
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

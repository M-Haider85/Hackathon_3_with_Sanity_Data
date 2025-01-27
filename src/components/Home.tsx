import React from 'react'
import Hero from './Hero'
import Customers from './Customers'
import FeaturedProducts from './FeaturedProducts'
import TopCategories from './TopCategories'
import HotCategory from './HotCategory'
import OurProducts from './OurProducts'
import ApiProductCard from '@/app/ApiProducts/page'

export default function Home() {
  return (
    <div>
      <Hero />
      <Customers />
      <FeaturedProducts />
      <TopCategories />
      <HotCategory />
      <OurProducts />
      <ApiProductCard />
    </div>
  )
}

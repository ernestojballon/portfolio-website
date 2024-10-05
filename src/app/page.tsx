import TitleImage from '@/components/sections/TitleImage'
import ScrollingReveal from '@/components/sections/ScrollingReveal'
import React from 'react'
import HeaderSection from './components/pageSections/HeaderSection'
import CarouselTechnologies from './components/pageSections/CarouselTechnologies'
import FavoriteLibraries from './components/pageSections/FavoriteLibraries'
import Experience from './components/pageSections/Experience'

const Home = () => {
  return (
    <>
      <HeaderSection />
      <CarouselTechnologies />
      <FavoriteLibraries />
      <Experience />

    </>
  )
}

export default Home
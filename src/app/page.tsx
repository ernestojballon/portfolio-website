import React from 'react';
import HeaderSection from './components/pageSections/HeaderSection';
import CarouselTechnologies from './components/pageSections/CarouselTechnologies';
import FavoriteLibraries from './components/pageSections/FavoriteLibraries';
import Experience from './components/pageSections/Experience';
import Divider from './components/Divider';

const Home = () => {
  return (
    <>
      <HeaderSection />
      <CarouselTechnologies />
      <FavoriteLibraries />
      <Experience />
      <Divider />
    </>
  );
};

export default Home;

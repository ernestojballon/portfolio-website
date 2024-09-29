import HeaderWithCarousel from '@/components/sections/headers/HeaderWithCarousel'
import HeaderWithImage from '@/components/sections/headers/HeaderWithImage'
import DismissCards from '@/components/sections/layout/DismissCards'
import VerticalFeatureProgress from '@/components/sections/layout/VerticalFeatureProgress'
import MultipleSlots from '@/components/sections/layout/MultipleSlots'
import TitleImage from '@/components/sections/TitleImage'
import ScrollingReveal from '@/components/sections/ScrollingReveal'
import { title } from 'process'
import React from 'react'
import Navbar1 from '@/components/sections/navs/NavBar1'

const Home = () => {
  return (
    <>

      <Navbar1 />
      <HeaderWithImage slot1={[
        <React.Fragment key="intro">
          <p key="tagline" className='tagLine'>Intro </p>
          <h1 key={title} className='h1'>Hola, I'm Ernesto </h1>
          <p className="body">
            Hey there! I'm a Full Stack Engineer with a serious love for all things
            JavaScript, cloud, and AI. I'm always on the hunt for new tech to play with and cool problems to solve. Learning is my jam
            – if it's cutting-edge and exciting, count me in!
          </p>
        </React.Fragment>

      ]}
        image={{
          src: '/images/programersWorking.png',
          alt: 'React js programer image'
        }}
      />
      <HeaderWithCarousel slot1={[
        <React.Fragment key="Technologies">
          <p key="tagline" className='tagLine'>Expertise</p>
          <h2 key={title} className='h2'>Technologies I'm proficient in</h2>
          <p className="body">
            I would say my greater strength is in the front-end,
            but I'm also very comfortable with the back-end.
            I've worked with a variety of technologies,
            but on the left a few of my favorites.
          </p>
        </React.Fragment >

      ]}
        images={[
          {
            src: '/images/docker.svg',
            alt: 'React js programer image'
          },
          {
            src: '/images/node.svg',
            alt: 'React js programer image'
          },
          {
            src: '/images/react.svg',
            alt: 'React js programer image'
          },
          {
            src: '/images/aws-logo.svg',
            alt: 'React js programer image'
          },
          {
            src: '/images/react.svg',
            alt: 'React js programer image'
          },
          {
            src: '/images/aws-logo.svg',
            alt: 'React js programer image'
          },
        ]}


      />
      <MultipleSlots />
      <DismissCards />
      <VerticalFeatureProgress />
      <ScrollingReveal />
      <TitleImage />
    </>
  )
}

export default Home
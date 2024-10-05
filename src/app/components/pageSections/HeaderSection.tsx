import HeaderWithImage from '@/components/sections/headers/HeaderWithImage'
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React from 'react'
import ResumeButton from '../ContactButtons';
const TechLogo = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={48} height={48} className="object-contain" />
);
const HeaderSection = () => {
  return (
    <HeaderWithImage slot1={[
      <React.Fragment key="intro">
        <div className="max-w-4xl mx-auto">
          <p className="tagLine">Software Engineer</p>
          <h1 className="h1 ">
            Hola, I'm Ernesto Ballon
          </h1>
          <p className="body mb-6">
            Father of two princesses, loving husband, problem solver, and Full Stack JavaScript Engineer.
          </p>
          {/* <p className="text-lg text-gray-700 mb-6">
              Experienced Engineer that specializes in building scalable,
              responsive, and user-centric
              applications using cutting-edge frontend
              frameworks and backend technologies.
            </p> */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="https://github.com/ernestojballon" className="btn btn-primary"

              target="_blank">
              <TechLogo src="/icons/github.svg" alt="React" />
            </Link>
            <Link href="https://www.linkedin.com/in/ernestojballon/" className="btn btn-primary"

              target="_blank">
              <TechLogo src="/icons/linkedin.svg" alt="React" />
            </Link>
            <ResumeButton />
          </div>
        </div>
      </React.Fragment >

    ]}
      image={{
        src: '/images/family.png',
        alt: 'React js programer image'
      }}
    />
  )
}

export default HeaderSection
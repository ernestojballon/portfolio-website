import TwoSectionsWithCarousel from '@/components/sections/headers/TwoSectionsWithCarousel';
import React from 'react'
import {
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ServerIcon,
  CogIcon,
  CircleStackIcon,
  CubeIcon,
  BeakerIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
const SkillItem = ({ Icon, skill }: { Icon: React.ElementType; skill: string }) => (
  <div className="flex items-center mb-2">
    <Icon className="h-5 w-5 text-blue-600 mr-2" />
    <span className="bodysmall">{skill}</span>
  </div>
);
const CarouselTechnologies = () => {
  return (
    < TwoSectionsWithCarousel slot1={
      [
        <React.Fragment key="Technologies">
          <p className="tagLine">Expertise</p>
          <h2 className="h1">I consider myself a React Engineer</h2>

          <p className="body">
            My greater strength lies in front-end development, but I&apos;m also very comfortable with back-end technologies.
            I&apos;ve worked with a diverse array of tools and frameworks, with React, AWS, and Node.js being some of my favorites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="h3 mb-4 flex items-center ">
                <CodeBracketIcon className="h-6 w-6 text-indigo-500 mr-2" />
                Front-End Expertise
              </h3>
              <SkillItem Icon={GlobeAltIcon} skill="React & React Native" />
              <SkillItem Icon={CogIcon} skill="Redux for state management" />
              <SkillItem Icon={CubeIcon} skill="Next.js for server-side rendering" />
              <SkillItem Icon={BeakerIcon} skill="TypeScript for type-safe code" />
              <SkillItem Icon={CpuChipIcon} skill="Tailwind CSS for rapid styling" />
            </div>
            <div>
              <h3 className="h3 mb-2 flex items-center">
                <ServerIcon className="h-6 w-6 text-indigo-500 mr-2" />
                Back-End & Cloud Skills
              </h3>
              <SkillItem Icon={CommandLineIcon} skill="Node.js with Express.js" />
              <SkillItem Icon={CloudIcon} skill="AWS services (Lambda, S3, EC2, etc.)" />
              <SkillItem Icon={CodeBracketIcon} skill="RESTful API design and GraphQL" />
              <SkillItem Icon={CircleStackIcon} skill="Database management (SQL & NoSQL)" />
              <SkillItem Icon={CubeIcon} skill="Serverless architecture" />
            </div>
          </div>
        </React.Fragment >

      ]}
      images={
        [
          {
            src: '/icons/aws.svg',
            alt: 'AWS icon'
          },
          {
            src: '/icons/bun.svg',
            alt: 'Bun icon'
          },
          {
            src: '/icons/cypress.svg',
            alt: 'Cypress icon'
          },
          {
            src: '/icons/deno.svg',
            alt: 'Deno icon'
          },
          {
            src: '/icons/docker.svg',
            alt: 'Docker icon'
          },
          {
            src: '/icons/github.svg',
            alt: 'GitHub icon'
          },
          {
            src: '/icons/graphql.svg',
            alt: 'GraphQL icon'
          },
          {
            src: '/icons/kubernetes.svg',
            alt: 'Kubernetes icon'
          },
          {
            src: '/icons/next.svg',
            alt: 'Next.js icon'
          },
          {
            src: '/icons/node.svg',
            alt: 'Node.js icon'
          },
          {
            src: '/icons/react.svg',
            alt: 'React icon'
          },
          {
            src: '/icons/redux.svg',
            alt: 'Redux icon'
          },
          {
            src: '/icons/tailwind.svg',
            alt: 'Tailwind CSS icon'
          },
          {
            src: '/icons/typescript.svg',
            alt: 'TypeScript icon'
          },
          {
            src: '/icons/vscode.svg',
            alt: 'Visual Studio Code icon'
          }
        ]}


    />
  )
}

export default CarouselTechnologies
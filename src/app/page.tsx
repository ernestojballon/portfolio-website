import HeaderWithCarousel from '@/components/sections/headers/HeaderWithCarousel'
import HeaderWithImage from '@/components/sections/headers/HeaderWithImage'
import DismissCards from '@/components/sections/layout/DismissCards'
import VerticalFeatureProgress from '@/components/sections/layout/VerticalFeatureProgress'
import MultipleSlots from '@/components/sections/layout/MultipleSlots'
import TitleImage from '@/components/sections/TitleImage'
import ScrollingReveal from '@/components/sections/ScrollingReveal'
import Image from 'next/image'
import React from 'react'
import Navbar1 from '@/components/sections/navs/NavBar1'
import {
  CodeBracketIcon, EyeIcon,
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
import Link from 'next/link'

const SkillItem = ({ Icon, skill }: { Icon: React.ElementType; skill: string }) => (
  <div className="flex items-center mb-2">
    <Icon className="h-5 w-5 text-blue-600 mr-2" />
    <span className="text-gray-700">{skill}</span>
  </div>
);

const TechLogo = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} width={48} height={48} className="object-contain" />
);

const projects = [
  {
    name: "Acosta DMA Cleaning Website",
    description: "A responsive website for a cleaning company, showcasing services and contact information.",
    image: "/images/acostadmacleaning-logo.png",
    url: "https://acostadmacleaning.com",
    repoUrl: "https://acostadmacleaning.com",
    technologies: [
      "Vanilla JS",
      "Tailwind CSS",
      "Babel",
      "Webpack",
      "AWS S3",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS SES"

    ],
  },
  {
    name: "Acosta DMA Cleaning Website",
    description: "A responsive website for a cleaning company, showcasing services and contact information.",
    image: "/images/acostadmacleaning-logo.png",
    url: "https://acostadmacleaning.com",
    repoUrl: "https://acostadmacleaning.com",
    technologies: [
      "Vanilla JS",
      "Tailwind CSS",
      "Babel",
      "Webpack",
      "AWS S3",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS SES"

    ],
  },
  {
    name: "Google Reviews Widget",
    description: "Widget Develop as web component to display google reviews",
    image: "/images/acostadmacleaning-logo.png",
    url: "#",
    repoUrl: "https://github.com/ernestojballon/review-widget-webcomponent",
    technologies: [
      "Stencil JS",
      "Tailwind CSS",
      "Babel",
      "Webpack",
      "AWS S3",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS SES"

    ],
  },
  // Add more projects here
];
const Home = () => {
  return (
    <>
      <Navbar1 />
      <HeaderWithImage slot1={[
        <React.Fragment key="intro">
          <div className="max-w-4xl mx-auto">
            <p className="tagLine">Full Stack JavaScript Engineer</p>
            <h1 className="h1 ">
              Hola, I'm Ernesto Ballon
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Experienced Engineer that specializes in building scalable,
              responsive, and user-centric
              applications using cutting-edge frontend
              frameworks and backend technologies.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <TechLogo src="/icons/react.svg" alt="React" />
              <TechLogo src="/icons/aws.svg" alt="AWS" />
              <TechLogo src="/icons/node.svg" alt="Node.js" />
              <TechLogo src="/icons/docker.svg" alt="docker" />
              <TechLogo src="/icons/typescript.svg" alt="typescript" />
              <TechLogo src="/icons/graphql.svg" alt="graphql" />
            </div>
          </div>
        </React.Fragment >

      ]}
        image={{
          src: '/images/programersWorking.png',
          alt: 'React js programer image'
        }}
      />
      < HeaderWithCarousel slot1={
        [
          <React.Fragment key="Technologies">
            <p className="text-xl text-indigo-600 mb-2">Expertise</p>
            <h2 className="text-3xl font-bold mb-4">Technologies I&apos;m proficient in</h2>

            <p className="text-lg text-gray-700 mb-6">
              My greater strength lies in front-end development, but I&apos;m also very comfortable with back-end technologies.
              I&apos;ve worked with a diverse array of tools and frameworks, with React, AWS, and Node.js being some of my favorites.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
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
                <h3 className="text-xl font-semibold mb-2 flex items-center">
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
      <MultipleSlots
        contents={[
          {
            slot1: [
              <React.Fragment key="intro">
                <div className="container mx-auto px-4">
                  <p className="text-lg font-semibold text-indigo-600 mb-2">HTML, CSS, and JavaScript</p>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Crafting the Frontend
                  </h1>
                  <p className="text-xl text-gray-700 mb-8">
                    With a keen eye for detail and a commitment to best practices,
                    I develop stunning websites that captivate users and drive results.
                  </p>

                  <div className="grid md:grid-row-2 gap-8">
                    {projects.map((project, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.name} logo`}
                          width={100}
                          height={100}
                          className="w-full h-20 object-scale-down"
                        />
                        <div className="p-6">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                            >
                              <EyeIcon className="w-5 h-5 mr-2" />
                              View Site
                            </Link>
                            <Link
                              href={project.repoUrl}
                              className="inline-flex items-center text-gray-600 hover:text-gray-800"
                            >
                              <CodeBracketIcon className="w-5 h-5 mr-2" />
                              View Code
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment >
            ],
            phoneImage: {
              src: '/images/frontend.webp',
              alt: 'frontendprogramer image'
            }
          },
          {
            slot1: [
              <React.Fragment key="Technologies">
                <p className="text-xl text-indigo-600 mb-2">Expertise</p>
                <h2 className="text-3xl font-bold mb-4">Technologies I&apos;m proficient in</h2>

                <p className="text-lg text-gray-700 mb-6">
                  My greater strength lies in front-end development, but I&apos;m also very comfortable with back-end technologies.
                  I&apos;ve worked with a diverse array of tools and frameworks, with React, AWS, and Node.js being some of my favorites.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <CodeBracketIcon className="h-6 w-6 text-indigo-500 mr-2" />
                      Front-End Expertise
                    </h3>
                    <SkillItem Icon={GlobeAltIcon} skill="React & React Native" />
                    <SkillItem Icon={CogIcon} skill="Redux for state management" />
                  </div>
                </div>
              </React.Fragment>
            ],
            phoneImage: {
              src: '/images/programersWorking.png',
              alt: 'React js programer image'
            }
          }
        ]}
        images={[{
          src: '/images/frontend.webp',
          alt: 'frontendprogramer image'
        },
        {
          src: '/images/frontend.webp',
          alt: 'React js programer image'
        }]} />
      <DismissCards />
      <VerticalFeatureProgress />
      <ScrollingReveal />
      <TitleImage />
    </>
  )
}

export default Home
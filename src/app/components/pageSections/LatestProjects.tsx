import React from 'react'
import TwoSections from '@/components/sections/content/TwoSections'
import Image from 'next/image'
import Link from 'next/link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

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
    name: "Google Reviews Widget",
    description: "Widget Develop as web component to display google reviews",
    image: "/images/acostadmacleaning-logo.png",
    url: "#",
    repoUrl: "https://github.com/ernestojballon/review-widget-webcomponent",
    technologies: [
      "Stencil JS",
      "Tailwind CSS",
      "AWS CloudFront",
      "AWS Route 53",
      "AWS SES"

    ],
  },
  // Add more projects here
];
const LatestProjects = () => {
  return (
    <TwoSections

      slot2={[
        <React.Fragment key="intro">
          <p className="tagLine">Project</p>
          <h2 className="h2">
            Showcase of my recent work
          </h2>
          <p className="body">
            With a keen eye for detail and a commitment to best practices,
            I develop stunning websites that captivate users and drive results.
          </p>
        </React.Fragment >
      ]}
      slot1={[
        <React.Fragment key="intro">

          <div className="grid md:grid-row-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-4">

                <div className="flex justify-between items-center">
                  <h3 className="h4">{project.name}</h3>
                  <div className="flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={`${project.name} logo`}
                      width={100}
                      height={100}
                      className="object-scale-down"
                    />
                  </div>
                </div>
                <p className="body">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
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
            ))}
          </div>
        </React.Fragment >
      ]}
    />
  )
}

export default LatestProjects
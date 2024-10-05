import React from 'react';
import VerticalFeatureProgress from '@/components/sections/layout/VerticalFeatureProgress';
import { Button } from '@/components/ui/button';
import ResumeButton from '../ContactButtons';

import Image from 'next/image';

const CompanyLogo = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={100}
    height={50}
    className="object-contain my-2"
  />
);

const Experience = () => {
  return (
    <VerticalFeatureProgress
      slot1={[
        <p key="tagline" className="tagLine">
          Experience
        </p>,
        <h2 key="title" className="h1">
          Places I&apos;ve worked
        </h2>,
        <p key="text" className="body">
          Over the years I was lucky to work with awesome people and companies.
        </p>,
        <div key="content" className="flex gap-4 mt-6">
          <ResumeButton />
          {/* <Button variant="secondary">Check Projects</Button> */}
        </div>,
      ]}
      features={[
        {
          icon: {
            src: '/icons/accenture.svg',
            alt: 'Accenture logo',
          },
          heading: 'Software Engineer at Accenture',
          descriptionNode: [
            <>
              <CompanyLogo src="/icons/comcast-lg.svg" alt="Comcast" />
              <p key="text" className="body mb-5">
                Lead Engineer for Comcast project, developing features for
                buyflow and checkout.
              </p>
              <CompanyLogo src="/icons/ross.svg" alt="ROSS" />
              <p key="text2" className="body mb-5">
                Senior Engineer for ROSS stores project, developed pilot for
                microfrontend application.
              </p>
              <CompanyLogo src="/icons/cat-lg.svg" alt="Caterpillar" />
              <p key="text3" className="body mb-5">
                Senior Engineer for Caterpillar project, developed application
                for remote 3D troubleshooting app for heavy machinery.
              </p>
            </>,
          ],
        },
        {
          icon: {
            src: '/icons/adp.svg',
            alt: 'ADP logo',
          },
          heading: 'Software Engineer at ADP',
          description:
            'Software Engineer for ADP project, developed features for application in charge of onboarding clients to the platform.',
        },
        {
          icon: {
            src: '/icons/centene.svg',
            alt: 'Centene Corp logo',
          },
          heading: 'Software Engineer at Centene',
          description:
            'Software Engineer for Centene project, developed features for pharmacies to be able to provide prescriptions to patients.',
        },
      ]}
    />
  );
};

export default Experience;

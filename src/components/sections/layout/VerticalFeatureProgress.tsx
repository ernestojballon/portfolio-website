'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type FeaturesProps = {
  icon: {
    src: string;
    alt: string;
  };
  heading: string;
  description?: string;
  descriptionNode?: React.ReactNode[];
};

type Props = {
  slot1: React.ReactNode[];
  features: FeaturesProps[];
};

export type VerticalFeatureProgressProps =
  React.ComponentPropsWithoutRef<'section'> & Partial<Props>;

export const VerticalFeatureProgress = (
  props: VerticalFeatureProgressProps
) => {
  const { slot1, features } = {
    ...VerticalFeatureProgressDefaults,
    ...props,
  } as Props;

  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ['start 55%', 'start start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="px-[5%] ">
      <div className="container grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>{slot1}</div>
        <div className="relative">
          <div className="absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]">
            <motion.div
              ref={scrollSection}
              className="bg-red-300 "
              style={{ height }}
            />
          </div>
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10"
            >
              <div className="relative flex flex-col items-center justify-start py-10">
                <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                  <Image
                    src={feature.icon.src}
                    alt={feature.icon.alt}
                    width={48}
                    height={48}
                    className="size-12"
                  />
                </div>
              </div>
              <div className="py-10">
                <h6 className="h2 mb-4">{feature.heading}</h6>
                {feature.description ? (
                  <p className="quote my-6">{feature.description}</p>
                ) : (
                  feature.descriptionNode?.map((node, index) => (
                    <div key={index}>{node}</div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VerticalFeatureProgressDefaults: VerticalFeatureProgressProps = {
  slot1: [
    <h1 key="title" className="h1">
      Medium length hero heading goes here
    </h1>,
    <p key="text" className="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>,
    <div key="content" className="flex gap-4 mt-6">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>,
  ],
  features: [
    {
      icon: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
        alt: 'icon 1',
      },
      heading: 'Subheading one',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      icon: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
        alt: 'icon 2',
      },
      heading: 'Subheading two',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      icon: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
        alt: 'icon 3',
      },
      heading: 'Subheading three',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      icon: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
        alt: 'icon 4',
      },
      heading: 'Subheading four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      icon: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
        alt: 'icon 4',
      },
      heading: 'Subheading four',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
  ],
};

export default VerticalFeatureProgress;

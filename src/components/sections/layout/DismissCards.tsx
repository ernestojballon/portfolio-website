"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { RxChevronRight } from "react-icons/rx";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
};

type Props = {
  slot1: React.ReactNode[];
  featureSections: FeatureSectionProps[];
};

export type DismissCardsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const DismissCards = (props: DismissCardsProps) => {
  const { slot1, featureSections } = {
    ...DismissCardsDefaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="px-[5%]">
      <div className="container relative h-[300svh] lg:h-[300vh]">
        <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-[100svh] md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
          <div>
            {slot1}
          </div>
          <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
            {featureSections.map((section, index) => (
              <FeatureSection
                key={index}
                section={section}
                index={index}
                totalSections={featureSections.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30],
  );
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vh", "-100vh"],
  );

  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vw", "-10vw"],
  );

  return (
    <motion.div
      className="absolute ml-6 mr-6 flex flex-col justify-between border rounded-md bg-white p-8 md:ml-0"
      style={{
        rotate: index === totalSections - 1 ? "9deg" : rotate,
        translateY: index === totalSections - 1 ? undefined : translateY,
        translateX: index === totalSections - 1 ? undefined : translateX,
        zIndex: `${totalSections - index}`,
      }}
    >
      <div className="rb-6 mb-6 md:mb-8">
        <img src={section.icon.src} alt={section.icon.alt} className="size-12" />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.title}</h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

export const DismissCardsDefaults: DismissCardsProps = {
  slot1: [
    <h1 key="title" className='h1'>Medium length hero heading goes here</h1>,
    <p key="text" className="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
      commodo diam libero vitae erat.
    </p>,
    <div key="content" className="flex gap-4 mt-6">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>,
  ],
  featureSections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "logo 1",
      },
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "logo 2",
      },
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "logo 3",
      },
      title: "Subheading three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "logo 4",
      },
      title: "Subheading four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
};
export default DismissCards;
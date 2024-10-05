"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  slot1: React.ReactNode[];
  phoneImage: ImageProps;
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type MultipleSlotsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const MultipleSlots = (props: MultipleSlotsProps) => {
  const { contents, images } = {
    ...MultipleSlotsDefaults,
    ...props,
  } as Props;

  const [activeSection, setActiveSection] = useState(0);
  const [isComponentInView, setIsComponentInView] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const componentRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (!componentRef.current) return;

    const componentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.1) {
          return setIsComponentInView(true);
        }
        setIsComponentInView(false);
      },
      { threshold: [0, 0.1] },
    );
    componentObserver.observe(componentRef.current);

    const sectionObservers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.2 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      componentObserver.disconnect();
      sectionObservers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const backgroundColor =
    isComponentInView && !isMobile
      ? `hsl(0, 0%, ${90 - activeSection * 10}%)`
      : "initial";

  return (
    <section ref={componentRef} className="px-[5%]">
      <div className="container relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
        <div className="grid grid-cols-1 gap-12 md:block">
          {contents.map((content, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen flex flex-col justify-center"
            >
              <div>{content.slot1}</div>
              <div className="mt-10 block w-full md:hidden">
                <img
                  src={content.phoneImage.src}
                  className="w-full"
                  alt={content.phoneImage.alt}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className={`absolute w-full transition-opacity duration-500 ${
                activeSection === index ? "opacity-100" : "opacity-0"
              }`}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      <div
        className="fixed inset-0 -z-10 transition-colors duration-500"
        style={{ backgroundColor }}
      />
    </section>
  );
};

export const MultipleSlotsDefaults: MultipleSlotsProps = {
  contents: [
    {
      slot1: [
        <h1 key="title" className="h1 text-red-400">
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
      phoneImage: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
        alt: "placeholder image 1",
      },
    },
    {
      slot1: [
        <h1 key="title" className="h1 text-red-400">
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
      phoneImage: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
        alt: "placeholder image 2",
      },
    },
  ],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
      alt: "placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
      alt: "placeholder image 2",
    },
  ],
};

export default MultipleSlots;

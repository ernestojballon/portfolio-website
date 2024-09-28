import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  slot1: React.ReactNode[];
  images: ImageProps[];
};

export type HeaderWithCarouselProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeaderWithCarousel = (props: HeaderWithCarouselProps) => {
  const { slot1, images } = {
    ...HeaderWithCarouselDefaults,
    ...props,
  } as Props;

  const reversedImages = useMemo(() => images.slice().reverse(), [images]);

  return (
    <section id="header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="h-[30rem] overflow-hidden lg:pl-0 lg:pr-0 pl-[1vw] pr-[1vw] md:h-[40rem] lg:h-screen ">
            <div className="grid w-full grid-cols-2 gap-x-4">
              <div className="-mt-[100%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
                {reversedImages.map((image, index) => (
                  <div key={index} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        className="absolute inset-0 h-full w-full  transition-opacity duration-300 ease-in-out group-hover:opacity-75"
                        src={image.src}
                        alt={image.alt || ""}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="grid size-full grid-cols-1 gap-4">
                    <div className="relative w-full pt-[120%]">
                      <img
                        className="absolute inset-0 h-full w-full  transition-opacity duration-300 ease-in-out group-hover:opacity-75"
                        src={image.src}
                        alt={image.alt || ""}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>{slot1}</div>
        </div>
      </div>
    </section>
  );
};

export const HeaderWithCarouselDefaults: HeaderWithCarouselProps = {
  slot1: [
    <span key="tagLine" className="tagLine">Ready</span>,
    <h1 key="title" className='h1'>Medium length hero heading goes here</h1>,
    <p key="text" className="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
      commodo diam libero vitae erat.
    </p>,
    <div key="content" className="flex gap-4 mt-6">
      <a href="#" >
        <Button>Primary Button</Button>
      </a>
      <a href="#" >
        <Button variant="secondary">Secondary Button</Button>
      </a>
    </div>
  ],
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
  ],
};

export default HeaderWithCarousel;
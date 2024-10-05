"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  slot1: React.ReactNode[];
  mainBackgroundImage: string;
  cardSlot1: React.ReactNode[];
  cardSlot2: React.ReactNode[];
};

export type ScrollingLayoutProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const ScrollingLayout = (props: ScrollingLayoutProps) => {
  const { slot1, mainBackgroundImage, cardSlot1, cardSlot2 } = {
    ...ScrollingLayoutDefaults,
    ...props,
  } as Props;
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate visible screen (use container height or a fixed value, whichever is smaller)
        const visibleScreen = Math.min(containerHeight, windowHeight);

        // Calculate start and end points for the animation
        const start = containerTop + visibleScreen - windowHeight + 100;
        const end = containerTop + containerHeight;
        const progress = (scrollPosition - start) / (end - start);

        // Clamp progress between 0 and 1
        const clampedProgress = Math.min(Math.max(progress, 0), 1);

        if (clampedProgress <= 0.3) {
          setScrollProgress(clampedProgress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    controlsLeft.start({
      padding: `${scrollProgress ? 2 : 0}rem`,
    });
    controlsRight.start({
      x: `0`,
      width: `${scrollProgress ? 40 : 0}%`,
      paddingRight: `${scrollProgress ? 2 : 0}rem`,
      paddingTop: `${scrollProgress ? 2 : 0}rem`,
      paddingBottom: `${scrollProgress ? 2 : 0}rem`,
      // opacity: `${scrollProgress ? 1 : 0.4}`,
    });
  }, [scrollProgress, controlsLeft]);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[150vh] w-[100%] flex ${isMobile && "flex-col"}  `}
    >
      <motion.section
        className="sticky top-0 left-0 flex items-center justify-center overflow-hidden w-full h-[100vh] "
        initial={{ y: "-5", width: "100%" }}
        animate={controlsLeft}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-full border-2 border-black ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={mainBackgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <div>{slot1}</div>
          </div>
        </div>
      </motion.section>
      {!isMobile ? (
        <motion.div
          className="sticky top-0 right-0  flex items-center justify-center overflow-hidden flex-col gap-12  "
          initial={{ x: "100%", width: "0vw", height: "100vh" }}
          animate={controlsRight}
          transition={{ duration: 1 }}
        >
          <div className="shadow-lg flex-auto border-2 border-black flex gap-4 overflow-hidden">
            <div className="p-4">
              <div key={"cardSlot1"}>{cardSlot1}</div>
            </div>
          </div>
          <div className="shadow-lg flex-auto border-2 border-black flex gap-4 overflow-hidden">
            <div className="p-4">
              <div key={"cardSlot2"}>{cardSlot2}</div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};

export const ScrollingLayoutDefaults: ScrollingLayoutProps = {
  slot1: [
    <p key={"Tagline"} className="text-sm font-semibold mb-2">
      Tagline
    </p>,
    <h1 key={"heading"} className="h2">
      Medium length section heading goes here
    </h1>,
    <p key={"description"} className="max-w-md mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique.
    </p>,
    <div key={"CTA"} className="flex space-x-4">
      ,<Button variant="secondary">Button</Button>
      <Button variant="link">Button →</Button>
    </div>,
  ],
  mainBackgroundImage:
    "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg",
  cardSlot1: [
    <img
      key={"link"}
      src={
        "https://cdn.prod.website-files.com/632abf3cc994db4faa25529f/632abf3cc994db480f2552e6_icon.svg"
      }
      alt="Icon"
      className="w-12 h-12 mb-4"
    />,
    <h3 key={"shortName"} className="text-xl font-semibold mb-2">
      Short heading here
    </h3>,
    <p key={"description"} className="text-sm mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique.
    </p>,
    <Button key={"cta"} variant="link">
      Button →
    </Button>,
  ],
  cardSlot2: [
    <img
      key={"link"}
      src={
        "https://cdn.prod.website-files.com/632abf3cc994db4faa25529f/632abf3cc994db480f2552e6_icon.svg"
      }
      alt="Icon"
      className="w-12 h-12 mb-4"
    />,
    <h3 key={"shortName"} className="text-xl font-semibold mb-2">
      Short heading here
    </h3>,
    <p key={"description"} className="text-sm mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique.
    </p>,
    <Button key={"cta"} variant="link">
      Button →
    </Button>,
  ],
};

export default ScrollingLayout;

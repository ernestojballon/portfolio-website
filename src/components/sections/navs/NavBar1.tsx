'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { RxChevronDown } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SubMenuLink = {
  url: string;
  title: string;
};

type BlogCategory = SubMenuLink & {
  image: ImageProps;
  description: string;
  button: any;
};

type LinkGroup = {
  title: string;
  subMenuLinks: SubMenuLink[];
};

type MegaMenuProps = {
  linkGroup: LinkGroup;
  blogCategories: BlogCategory[];
};

type NavLink = {
  url: string;
  title: string;
  megaMenu?: MegaMenuProps;
};

type Props = {
  logoSlot: React.ReactNode;
  navLinks: NavLink[];
  buttons: any[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
  const { logoSlot, navLinks, buttons } = {
    ...Navbar1Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <nav className="fixed top-0 z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-white px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <div>{logoSlot}</div>

        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-white px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            {navLinks.map((navLink, index) => (
              <div key={index}>
                {navLink.megaMenu ? (
                  <SubMenu
                    megaMenu={navLink.megaMenu}
                    title={navLink.title}
                    isMobile={isMobile}
                  />
                ) : (
                  <a
                    href={navLink.url}
                    className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                  >
                    {navLink.title}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
            variants={topLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            variants={middleLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
            variants={bottomLineVariants}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              open: { height: '100dvh' },
              close: { height: 'auto' },
            }}
            animate={isMobileMenuOpen ? 'open' : 'close'}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden "
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{
                open: { y: 0 },
                close: { y: '-100%' },
              }}
              animate={isMobileMenuOpen ? 'open' : 'close'}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-[100dvh] overflow-auto border-b border-border-primary bg-white px-[5%] pb-8 pt-4"
            >
              <div className="flex flex-col">
                {navLinks.map((navLink, index) => (
                  <div key={index}>
                    {navLink.megaMenu ? (
                      <SubMenu
                        megaMenu={navLink.megaMenu}
                        title={navLink.title}
                        isMobile={isMobile}
                      />
                    ) : (
                      <a href={navLink.url} className="block py-3 text-md">
                        {navLink.title}
                      </a>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col items-stretch gap-4">
                  {buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
const SubMenu = ({
  title,
  megaMenu,
  isMobile,
}: {
  title: string;
  megaMenu: MegaMenuProps;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <button
        className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.span
          animate={isDropdownOpen ? 'rotated' : 'initial'}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            variants={{
              open: {
                opacity: 1,
                height: 'var(--height-open, auto)',
              },
              close: {
                opacity: 0,
                height: 'var(--height-close, 0)',
              },
            }}
            animate={isDropdownOpen ? 'open' : 'close'}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bg-white bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
          >
            <div className="mx-auto flex size-full max-w-full items-center justify-between">
              <div className="flex w-full flex-col lg:flex-row">
                {/* Left content */}
                <div className="w-full content-start py-4 sm:py-8 lg:max-w-[15rem] lg:pr-8">
                  <div className="grid auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-4">
                    <h4 className="text-sm font-semibold leading-[1.4] md:leading-[1.3]">
                      {megaMenu.linkGroup.title}
                    </h4>
                    {megaMenu.linkGroup.subMenuLinks.map(
                      (subMenuLink, index) => (
                        <a key={index} href={subMenuLink.url}>
                          {subMenuLink.title}
                        </a>
                      )
                    )}
                  </div>
                </div>

                {/* Right content */}
                <div className="relative flex w-full flex-wrap items-start justify-center pb-6 lg:items-stretch lg:pt-6">
                  <div className="grid w-full auto-cols-max auto-rows-max grid-cols-1 grid-rows-[max-content] gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-y-2">
                    {megaMenu.blogCategories.map((blogCategory, index) => (
                      <a
                        key={index}
                        href={blogCategory.url}
                        className="grid max-w-full auto-cols-fr grid-cols-1 items-start gap-x-6 gap-y-4 py-2 lg:grid-cols-[0.5fr_1fr] lg:gap-y-0"
                      >
                        <div className="relative flex w-full flex-col pt-[10%] lg:flex-row">
                          <Image
                            src={blogCategory.image.src}
                            alt={blogCategory.image.alt || ''}
                            width={500}
                            height={300}
                            layout="responsive"
                          />
                        </div>
                        <div className="flex w-full flex-col justify-center self-center lg:w-auto">
                          <h5 className="mb-1 font-semibold">
                            {blogCategory.title}
                          </h5>
                          <p className="text-sm">{blogCategory.description}</p>
                          <Button
                            {...blogCategory.button}
                            className="mt-2 w-fit text-sm underline"
                          >
                            {blogCategory.button.title}
                          </Button>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar1Defaults: Navbar1Props = {
  logoSlot: [
    <a key={'logo'} href={'/'} className="flex items-center">
      <p className="font-bold text-2xl bg-gradient-to-r from-indigo-400 to-red-400 text-transparent bg-clip-text">
        Ernesto J Ballon
      </p>
    </a>,
  ],
  navLinks: [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },

    {
      title: 'Showcase',
      url: '#',
      megaMenu: {
        linkGroup: {
          title: 'Blog categories',
          subMenuLinks: [
            {
              url: '#',
              title: 'Category One',
            },
            {
              url: '#',
              title: 'Category Two',
            },
            {
              url: '#',
              title: 'Category Three',
            },
            {
              url: '#',
              title: 'Category Four',
            },
            {
              url: '#',
              title: 'Category Five',
            },
          ],
        },
        blogCategories: [
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 1',
            },
            title: 'ESignature Component',
            description: 'React signature component for web applications',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 2',
            },
            title: 'Todo List',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 3',
            },
            title: 'Article Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 4',
            },
            title: 'Article Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 5',
            },
            title: 'Article Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
          {
            url: '#',
            image: {
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              alt: 'placeholder image 6',
            },
            title: 'Article Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            button: { title: 'Read more', variant: 'link', size: 'link' },
          },
        ],
      },
    },
  ],
  buttons: [
    {
      title: 'Sign In',
      variant: 'default',
      size: 'lg',
    },
    {
      title: 'Sign Up',
      variant: 'variant',
      size: 'lg',
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: '1.5rem',
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

export default Navbar1;

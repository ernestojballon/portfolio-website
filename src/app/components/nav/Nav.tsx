import React from 'react';
import Navbar1 from '@/components/sections/navs/NavBar1';
import Image from 'next/image';

const NavBar = () => {
  return (
    <Navbar1
      logoSlot={[
        <a key="logo" href={'/'} className="flex ">
          <div className="relative flex h-fit items-center justif-center gap-2">
            <p className="body flex gap-2 bg-gradient-to-r from-indigo-400 to-red-400 text-transparent bg-clip-text">
              <Image
                className="rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-300 to-red-300 hover:scale-110 hover:border-0 transition-all duration-300 ease-in-out"
                src="/images/ernesto-ballon.jpeg"
                alt="Ernesto J Ballon"
                width={40}
                height={40}
              />
              <span className="my-auto">Ernesto J Ballon</span>
            </p>
          </div>
        </a>,
      ]}
      navLinks={[
        { title: 'Home', url: '/' },
        { title: 'Blog', url: '/blog' },

        {
          title: 'Showcase',
          url: '#',
          megaMenu: {
            linkGroup: {
              title: 'Projects',
              subMenuLinks: [
                // {
                //   url: "#",
                //   title: "Category One",
                // },
              ],
            },
            blogCategories: [
              {
                url: 'https://www.acostadmacleaning.com/',
                image: {
                  src: '/images/acostadma-site.png',
                  alt: 'acostadma site',
                },
                title: 'Website acostaDMACleaning',
                description: 'Website for acostaDMACleaning',
                button: { title: 'Go to site', variant: 'link', size: 'link' },
              },
              {
                url: '/signature',
                image: {
                  src: '/images/esignature-modal.png',
                  alt: 'signature modal',
                },
                title: 'ESignature Component',
                description: 'Fun esignature component and mural',
                button: {
                  title: 'Check it out',
                  variant: 'link',
                  size: 'link',
                },
              },
              {
                url: '/playground',
                image: {
                  src: '/images/js-playground.png',
                  alt: 'js playground',
                },
                title: 'JS playground',
                description: 'Playground for js code',
                button: {
                  title: 'Check it out',
                  variant: 'link',
                  size: 'link',
                },
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
      ]}
      buttons={[
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
      ]}
    />
  );
};

export default NavBar;

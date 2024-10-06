import { Footer4 } from '@/components/sections/footer/Footer4';
import React from 'react';
import { BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';

const Footer = () => {
  return (
    <Footer4
      logo={{
        url: '/',
        src: '/images/favicon.png',
        alt: 'Logo image',
      }}
      columnLinks={[
        {
          links: [
            { title: 'Home', url: '/' },
            { title: 'Blog', url: '/blog' },
            { title: 'Playground', url: '/playground' },
            { title: 'Resume', url: 'https://ernestoballon.com/resume.pdf' },
          ],
        },
      ]}
      socialMediaLinks={[
        {
          url: 'https://github.com/ernestoballon',
          icon: <BiLogoGithub className="size-6 p-0.5" />,
        },
        {
          url: 'https://www.linkedin.com/in/ernesto-ballon/',
          icon: <BiLogoLinkedinSquare className="size-6" />,
        },
      ]}
      footerText={`© ${new Date().getFullYear()} BallonWebSolutions. All rights reserved.`}
      footerLinks={[]}
    />
  );
};

export default Footer;

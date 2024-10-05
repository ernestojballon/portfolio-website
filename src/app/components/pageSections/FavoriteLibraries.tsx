import React from 'react';
import DismissCards from '@/components/sections/layout/DismissCards';
import { Button } from '@/components/ui/button';
import ResumeButton, { CallMeButton, EmailButton } from '../ContactButtons';

const FavoriteLibraries = () => {
  return (
    <DismissCards
      slot1={[
        <p key="tagLine" className="tagLine">
          Tools
        </p>,
        <h2 key="title" className="h1">
          Some of my preferred libraries and tools
        </h2>,

        <p key="text" className="body">
          I love JavaScript and AWS. I&apos;m always looking for new libraries
          and tools to make me productive.
        </p>,
        <div key="content" className="flex gap-4 mt-6">
          <ResumeButton />
          <EmailButton />
        </div>,
      ]}
      featureSections={[
        {
          icon: {
            src: '/icons/react.svg',
            alt: 'react js logo',
          },
          title: 'Obsessed with React.js, I have almost 5 years of experience',
          description:
            'From web pages to 3D applications, I have worked with React.js in a variety of projects. I have a deep understanding of the library and its ecosystem, including Redux, Next.js, and Gatsby.js, all of them with TypeScript.',
        },
        {
          icon: {
            src: '/icons/node.svg',
            alt: 'Node.js logo',
          },
          title: 'Node.js + Lambda',
          description:
            "I built RESTful APIs and serverless applications. I have worked with Express.js and Serverless Framework, and I'm comfortable with both SQL and NoSQL databases.",
        },
        {
          icon: {
            src: '/icons/graphql.svg',
            alt: 'GraphQL logo',
          },
          title: 'Always Prefer GraphQL',
          description:
            "Used GraphQL to build scalable and performant APIs. I have worked with Apollo Server and Apollo Client, and I'm comfortable with both SQL and NoSQL databases.",
        },
        {
          icon: {
            src: '/icons/docker.svg',
            alt: 'Docker logo',
          },
          title: 'Containers with Docker',
          description:
            'I use Docker for dev environments, to test something fast, or to take something to production, and it never lets me down.',
        },
      ]}
    />
  );
};

export default FavoriteLibraries;

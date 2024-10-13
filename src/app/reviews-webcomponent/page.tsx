'use client';

import useScriptLoader from '@/utils/useScriptLoader';
import React, { useEffect, useRef } from 'react';
import reviewsData from './gooogleReviews.json';
import Link from 'next/link';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'reviews-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          reviews?: any[];
        },
        HTMLElement
      >;
    }
  }
}

const ReviewsWebcomponent = () => {
  const scriptConfigs = [
    {
      url: 'https://www.ernestoballon.com/build/webcomponents-library-stencil.esm.js',
      type: 'module' as const,
    },
    {
      url: 'https://www.ernestoballon.com/build/webcomponents-library-stencil.js',
      type: 'nomodule' as const,
    },
  ];

  const { status, error } = useScriptLoader(scriptConfigs);
  const reviewsRef = useRef<
    HTMLElement & {
      reviews: any[];
    }
  >(null);

  useEffect(() => {
    if (status === 'loaded' && reviewsRef.current) {
      reviewsRef.current.reviews = reviewsData.googleReviews;
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading web component...</div>;
  }

  if (status === 'error') {
    return <div>Error loading web component: {error?.message}</div>;
  }

  return (
    <div className="px-[5%] pt-24 md:pt-[17vh]">
      <div className="container">
        <h2 className="h1">Google Reviews web component</h2>
        <p className="body">
          This is a Stencil web component that displays reviews from a JSON
          file.
        </p>
        {reviewsData.googleReviews && <reviews-widget ref={reviewsRef} />}
        <p className="body">
          On Production this component will receive data from a scraping reviews
          data in this web component.
        </p>
        <p className="body">You can see it fully working in </p>
        <Link
          href="https://www.acostadmacleaning.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          www.acostadmacleaning.com
        </Link>
        <br />
        <p className="body">
          If you want this component showing your google reviews on your web
          page with your reviews send me an email{' '}
        </p>
        <Link
          href="mailto:ernestoballon@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          ernestoballon@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ReviewsWebcomponent;

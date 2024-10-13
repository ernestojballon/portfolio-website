import React from 'react';
import { ReactNode } from 'react';
import { WpPostsType } from '../helpers/types';
import { findPostBySlug } from '../helpers/graphql';
import { postParser } from '../helpers/blogsParser';
import { postSanitizer } from '../helpers/postSanitizer';
import { Metadata } from 'next';

type LayoutProps = {
  children: ReactNode;
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  const wpPost: WpPostsType = await findPostBySlug(slug);
  const postItem = postSanitizer(postParser(wpPost));
  return postItem;
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { slug } = params;
  const blog = await getPost(slug);

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.featuredImage || '' }],
      url: blog.slug,
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.date,
      authors: [blog.author || ''],
      section: blog.categories?.join(', '),
      tags: blog.categories,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featuredImage || ''],
    },
    other: {
      'twitter:label1': 'Reading time',
      'twitter:data1': '5 min read',
    },
  };
}

export default async function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}

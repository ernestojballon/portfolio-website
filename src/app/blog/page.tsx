import React from 'react';
import BlogList from '@/components/sections/lists/BlogList';
import { findAllPosts } from '@/app/blog/helpers/graphql/index';
import { blogParser } from './helpers/blogsParser';
import { PostListItem, WpPostsType } from './helpers/types';
import { postSanitizer } from './helpers/postSanitizer';

const BlogHome = async () => {
  const wpPostList: WpPostsType[] = await findAllPosts();

  const postList: PostListItem[] = blogParser(wpPostList);

  const blogPosts = postList
    .map((post: PostListItem) => {
      return postSanitizer(post);
    })
    .map((post: PostListItem) => ({
      url: `/blog/${post.slug}`,
      image: {
        src: post.featuredImage || '',
        alt: post.title || '',
      },
      category: (post.categories || []).join(', '),
      title: post.title,
      excerpt: post.excerpt || '',
      avatar: {
        src: post.authorImage || '',
        alt: post.author || '',
      },
      fullName: post.author,
      date: post.date,
      readTime: '5 min read',
    }));
  return (
    <>
      <BlogList
        slot1={[
          <h1 key="title" className="h1 text-4xl font-bold mb-4 ">
            Ernesto Ballon&apos;s Tech Blog
          </h1>,
          <p key="text" className="body text-lg mb-6">
            Welcome to my blog! Here I share my thoughts, ideas, and experiences
            in the tech world. I hope you find something useful here.
          </p>,
          <p key="cta" className="mt-4 text-sm italic">
            It&apos;s never too late to start sharing knowledge. Let&apos;s
            learn together!
          </p>,
        ]}
        blogPosts={blogPosts}
      />
    </>
  );
};

export default BlogHome;

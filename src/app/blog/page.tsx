import React from 'react';
import BlogList from '@/components/sections/lists/BlogList';
import { formatReadableDate } from '@/utils/formatReadableDate';
import {
  getPostsQuery,
  getErnestoWordpressClient,
} from '@/app/blog/helpers/graphql/index';
import blogParser, { PostListItem } from '@/app/blog/helpers/blogsParser';
import stringFormatter from '@/utils/stringFormatter';
import appConfig from '@/app/app.config';

export const revalidate = 5;

const BlogHome = async () => {
  const { data } = await getErnestoWordpressClient().query({
    query: getPostsQuery,
  });
  const postList = blogParser(data);
  const blogPosts = postList.map((post: PostListItem) => ({
    url: `/blog/${post.slug}`,
    image: {
      src: post.featuredImage
        ? stringFormatter({
            str: post.featuredImage,
            options: {
              stringReplace: {
                from: appConfig.wordpressApiUrl,
                to: appConfig.wordpressCloudfrontUrl,
              },
            },
          })
        : 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
      alt: ' placeholder image 1',
    },
    category: post.categories
      .filter((cat) => 'Uncategorized' !== cat)
      .map((cat) => cat.toUpperCase())
      .join(', '),
    title: post.title,
    excerpt: post.excerpt
      ? stringFormatter({
          str: post.excerpt,
          options: {
            removeHtmlTags: true,
            truncateOn: 150,
            firstCapital: true,
          },
        })
      : '',
    avatar: {
      src:
        post.authorImage ||
        'https://d22po4pjz3o32e.cloudfront.net/placeholder-avatar.svg',
      alt: ' placeholder avatar 3',
    },
    fullName: post.author,
    date: post.date && formatReadableDate(post.date),
    readTime: '5 min read',
  }));
  return (
    <>
      <BlogList
        slot1={[
          <h1 key="title" className="h1 text-4xl font-bold mb-4 text-red-400">
            Ernesto Ballon&apos;s Tech Blog
          </h1>,
          <p key="text" className="body text-lg mb-6">
            Documenting{' '}
            <span className="font-semibold text-green-600">solutions</span> and{' '}
            <span className="font-semibold text-red-600">challenges</span> from
            my journey as a software engineer.
          </p>,
          <div key="tech" className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-sm font-medium mb-2">This blog is powered by:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold text-indigo-600">Next.js</span>{' '}
                for the frontend
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  Headless WordPress
                </span>{' '}
                as the backend
              </li>
            </ul>
          </div>,
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

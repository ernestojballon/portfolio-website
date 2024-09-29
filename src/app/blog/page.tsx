
import React from 'react'
import BlogList from '@/components/sections/lists/BlogList'
import Navbar1 from '@/components/sections/navs/NavBar1'
import { formatReadableDate } from '@/utils/formatReadableDate'
import { getPostsQuery, getErnestoWordpressClient } from "@/app/blog/helpers/graphql/index";
import blogParser, { PostListItem } from "@/app/blog/helpers/blogsParser";

export const revalidate = 5;

const BlogHome = async () => {
  const { data } = await getErnestoWordpressClient().query({
    query: getPostsQuery
  });
  const postList = blogParser(data);
  const blogPosts = postList.map((post: PostListItem) => ({
    url: `/blog/${post.slug}`,
    image: {
      src: post.featuredImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: " placeholder image 1",
    },
    category: post.categories.filter((cat) => "Uncategorized" !== cat).map((cat => cat.toUpperCase())).join(", "),
    title: post.title,
    excerpt: post.excerpt,
    avatar: {
      src: post.authorImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-avatar.svg",
      alt: " placeholder avatar 3",
    },
    fullName: post.author,
    date: post.date && formatReadableDate(post.date),
    readTime: "5 min read",

  }))
  return (
    <>
      <Navbar1 />
      <BlogList
        slot1={
          [
            <h1 key="title" className='h1'>Ernesto Ballon Blog</h1>,
            <p key="text" className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>,
          ]}
        blogPosts={blogPosts}
      />
    </>
  )
}

export default BlogHome
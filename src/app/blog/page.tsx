
import React from 'react'
import BlogList from '@/components/sections/lists/BlogList'
import Navbar1 from '@/components/sections/navs/NavBar1'
import { formatReadableDate } from '@/utils/formatReadableDate'

const BlogHome = async () => {
  const res = await fetch('https://wordpress.ernestoballon.com/wp-json/wp/v2/posts')

  const posts = await res.json()

  const blogPosts = posts.map((post: any) => ({
    url: `/blog/${post.slug}`,
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: " placeholder image 1",
    },
    // category: "Uncategorized",
    title: post.title.rendered,
    description: (<span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />),
    avatar: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: " placeholder avatar 3",
    },
    fullName: "Ernesto Ballon",
    date: formatReadableDate(post.date),
    // readTime: "5 min read",

  }))
  // render post links
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
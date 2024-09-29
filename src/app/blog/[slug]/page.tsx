import TitleChidren from '@/components/sections/content/TitleChidren'
import Navbar1 from '@/components/sections/navs/NavBar1'
import React from 'react'


export async function generateStaticParams() {
  const res = await fetch('https://wordpress.ernestoballon.com/wp-json/wp/v2/posts')
  const posts = await res.json()
  const postSlugs = posts.map((post: { slug: string }) => ({ slug: post.slug }))
  return postSlugs
}

type BlogPostProps = {
  params: {
    slug: string
  }
}
const BlogPage = async (props: BlogPostProps) => {

  const { slug } = props.params
  const url = `https://wordpress.ernestoballon.com/wp-json/wp/v2/posts?slug=${slug}`
  const res = await fetch(url)
  const post = await res.json()
  const blog = post[0]

  return (
    <>
      <Navbar1 />
      <TitleChidren
        heading={blog.title?.rendered}
        children={(<span dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />)}
      />
    </>

  )
}

export default BlogPage
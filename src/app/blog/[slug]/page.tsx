import TitleChidren from '@/components/sections/content/TitleChidren'
import Navbar1 from '@/components/sections/navs/NavBar1'
import sanitized from '@/utils/stringFormatter'
import React from 'react'
import styles from './wordpressStyles.module.css'


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

  const html = sanitized({
    str: blog.content.rendered,
    options: {
      sanitize: true,
      sanitizeOptions: {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'src'],
        ALLOW_UNKNOWN_PROTOCOLS: true,
        ALLOWED_URI_REGEXP: /^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
      },
      stringReplace: {
        from: "https://wordpress.ernestoballon.com",
        to: "https://drxtoysoe50lt.cloudfront.net",
      }
    }
  })


  return (
    <div className={styles.container}>
      <Navbar1 />
      <TitleChidren
        heading={blog.title?.rendered}
        children={(<span dangerouslySetInnerHTML={{ __html: html }} />)}
      />
    </div>
  )
}

export default BlogPage
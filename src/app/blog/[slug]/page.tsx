import TitleChidren from '@/components/sections/content/TitleChidren';

import sanitized from '@/utils/stringFormatter';
import React from 'react';
import styles from './wordpressStyles.module.css';
import appConfig from '@/app/app.config';

export async function generateStaticParams() {
  const res = await fetch(`${appConfig.wordpressApiUrl}/wp-json/wp/v2/posts`);
  const posts = await res.json();
  const postSlugs = posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
  return postSlugs;
}

type BlogPostProps = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  const url = `${appConfig.wordpressApiUrl}/wp-json/wp/v2/posts?slug=${slug}`;
  const res = await fetch(url, { next: { revalidate: 60 } }); // Revalidate every 60 seconds
  const post = await res.json();
  return post[0];
}

const BlogPage = async (props: BlogPostProps) => {
  const { slug } = props.params;
  const blog = await getPost(slug);

  const html = sanitized({
    str: blog.content.rendered,
    options: {
      sanitize: true,
      sanitizeOptions: {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: [
          'allow',
          'allowfullscreen',
          'frameborder',
          'scrolling',
          'src',
        ],
        ALLOW_UNKNOWN_PROTOCOLS: true,
        ALLOWED_URI_REGEXP:
          /^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
      },
      stringReplace: {
        from: appConfig.wordpressApiUrl,
        to: appConfig.wordpressCloudfrontUrl,
      },
    },
  });

  return (
    <div>
      <div className={styles.container}>
        <TitleChidren heading={blog.title?.rendered}>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </TitleChidren>
      </div>
    </div>
  );
};

export default BlogPage;

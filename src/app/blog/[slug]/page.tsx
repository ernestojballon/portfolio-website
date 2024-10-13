import TitleChidren from '@/components/sections/content/TitleChidren';

import React from 'react';
import Image from 'next/image';
import styles from './wordpressStyles.module.css';
import { findAllSlugsPosts, findPostBySlug } from '../helpers/graphql';
import { postSanitizer } from '../helpers/postSanitizer';
import { postParser } from '../helpers/blogsParser';
import { WpPostsType } from '../helpers/types';

type GenerateStaticParams = () => Promise<{ slug: string }[]>;
export const generateStaticParams: GenerateStaticParams = async () => {
  const slugsLists = await findAllSlugsPosts();
  return slugsLists;
};

type BlogPostProps = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  const wpPost: WpPostsType = await findPostBySlug(slug);
  const postItem = postSanitizer(postParser(wpPost));
  return postItem;
}

const BlogPage = async (props: BlogPostProps) => {
  const { slug } = props.params;
  const blog = await getPost(slug);

  return (
    <TitleChidren heading={blog.title || ''}>
      <div>
        <div className="flex mt-4 items-center gap-2 mb-8">
          <p className="small ">{blog.date}</p>
          <p className=" text-gray-400">•</p>
          <Image
            src={blog.authorImage || ''}
            alt={blog.author || ''}
            width={30}
            height={30}
          />
          <p className="small">{blog.author}</p>
          <p className=" text-gray-400">•</p>
          <p className="small">5 min read</p>
        </div>
      </div>
      <div className={styles.wpcontainer}>
        <span dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
      </div>
    </TitleChidren>
  );
};

export default BlogPage;

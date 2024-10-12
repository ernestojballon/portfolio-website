import React from 'react';
import { ReactNode } from 'react';
import styles from './wordpressStyles.module.css';
import { WpPostsType } from '../helpers/types';
import { findPostBySlug } from '../helpers/graphql';
import { postParser } from '../helpers/blogsParser';
import { postSanitizer } from '../helpers/postSanitizer';
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
export default async function Layout({
  children,
  params,
  ...props
}: LayoutProps) {
  const { slug } = params;
  const blog = await getPost(slug);

  console.log({
    blog,
    props,
  });

  return <main className={styles.wordpressContent}>{children}</main>;
}

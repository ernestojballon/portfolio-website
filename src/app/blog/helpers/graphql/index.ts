import { WpPostsType } from '../types';
import getErnestoWordpressClient from './client';

import { findAllPostsQuery } from './queries/findAllPosts';
import { findAllSlugsPostsQuery } from './queries/findAllSlugsPosts';
import { findPostBySlugQuery } from './queries/findPostBySlug';

type FindAllPosts = () => Promise<WpPostsType[]>;
export const findAllPosts: FindAllPosts = async () => {
  const { data } = await getErnestoWordpressClient().query({
    query: findAllPostsQuery,
  });

  return data.posts.edges.map((edge: any) => edge.node);
};

type FindPostBySlug = (slug: string) => Promise<WpPostsType>;
export const findPostBySlug: FindPostBySlug = async (slug: string) => {
  const { data } = await getErnestoWordpressClient().query({
    query: findPostBySlugQuery,
    variables: { slug },
  });
  return data.postBy;
};

type FindAllSlugsPosts = () => Promise<{ slug: string }[]>;
export const findAllSlugsPosts: FindAllSlugsPosts = async () => {
  const { data } = await getErnestoWordpressClient().query({
    query: findAllSlugsPostsQuery,
  });

  return data.posts.nodes.reduce(() => {
    return data.posts.nodes.map((node: { slug: string }) => ({
      slug: node.slug,
    }));
  }, []);
};

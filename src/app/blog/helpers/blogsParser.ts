import { WpPostsType, PostListItem } from './types';

export const postParser = (postData: WpPostsType): PostListItem => {
  return {
    id: postData.id,
    slug: postData.slug,
    title: postData.title,
    categories: postData.categories?.edges.map(
      (catEdge: any) => catEdge.node.name
    ),
    featuredImage: postData.featuredImage?.node?.mediaItemUrl || null,
    excerpt: postData.excerpt,
    author:
      `${postData.author?.node.firstName} ${postData.author?.node.lastName}`.trim(),
    authorImage: postData.author?.node.avatar?.url || null,
    date: postData.date,
    content: postData.content || '',
  };
};

export const blogParser = (wpPosts: WpPostsType[]): PostListItem[] => {
  return wpPosts.map((wpPost: WpPostsType) => {
    return postParser(wpPost);
  });
};

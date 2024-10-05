export interface PostListItem {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  featuredImage: string | null;
  author: string;
  authorImage: string | null;
  excerpt: string;
  date: string;
}

const blogParser = (data: any): PostListItem[] => {
  if (!data || !data.posts || !data.posts.edges) {
    return [];
  }

  return data.posts.edges.map((edge: any) => {
    const post = edge.node;
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      categories: post.categories.edges.map(
        (catEdge: any) => catEdge.node.name,
      ),
      featuredImage: post.featuredImage?.node?.mediaItemUrl || null,
      excerpt: post.excerpt,
      author:
        `${post.author.node.firstName} ${post.author.node.lastName}`.trim(),
      authorImage: post.author.node.avatar?.url || null,
      date: post.date,
    };
  });
};

export default blogParser;

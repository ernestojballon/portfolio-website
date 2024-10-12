export type WpPostsType = {
  id: string;
  slug: string;
  title: string;
  categories?: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
  featuredImage?: {
    node: {
      mediaItemUrl: string;
    };
  };
  excerpt?: string;
  author?: {
    node: {
      firstName: string;
      lastName: string;
      avatar: {
        url: string;
      };
    };
  };
  date?: string;
  content?: string;
};

export type PostListItem = {
  id: string;
  slug: string;
  title: string;
  categories?: string[];
  featuredImage?: string | null;
  author?: string;
  authorImage?: string | null;
  excerpt?: string;
  date?: string;
  content?: string;
};

import { gql } from '@apollo/client';

export const findAllSlugsPostsQuery = gql`
  query AllSlugsPosts {
    posts {
      nodes {
        slug
      }
    }
  }
`;

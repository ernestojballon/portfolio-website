import { gql } from '@apollo/client';

export const findPostBySlugQuery = gql`
  query findPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
        }
      }
      date
      featuredImage {
        node {
          mediaItemUrl
          title
        }
      }
      content
    }
    categories {
      nodes {
        name
      }
    }
  }
`;

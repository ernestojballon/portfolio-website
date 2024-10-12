import { gql } from '@apollo/client';

export const findAllPostsQuery = gql`
  query findAllPosts {
    posts {
      edges {
        node {
          id
          slug
          title
          excerpt
          date
          categories {
            edges {
              node {
                name
              }
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          author {
            node {
              firstName
              lastName
              avatar {
                foundAvatar
                height
                url
                width
              }
            }
          }
        }
      }
    }
  }
`;

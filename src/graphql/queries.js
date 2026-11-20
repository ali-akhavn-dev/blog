import { gql } from "@apollo/client";

const GET_BLOGS = gql`
  query {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

export { GET_BLOGS }
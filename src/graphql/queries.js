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

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      field
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field
      avatar {
        url
      }
      description {
        html
      }
      post {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
    }
  }
`;

export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR };

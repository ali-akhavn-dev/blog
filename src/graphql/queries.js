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

const GET_BLOG = gql`
  query getBlog($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      coverPhoto {
        url
      }
      content {
        html
      }
      author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;

export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR, GET_BLOG };

import { gql } from "@apollo/client";

export const UPDATE_BOOK = gql`
  mutation updateBook($id: ID!, $title: String!, $author: String!, $brief: String!) {
    updateBook(_id: $id, title: $title, author: $author, brief: $brief) {
      _id,
      title,
      author,
      brief
    }
  }
`

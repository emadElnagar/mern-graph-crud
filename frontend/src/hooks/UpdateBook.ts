import { gql } from "@apollo/client";

export const UPDATE_BOOK = gql`
  mutation updateBook($id: ID!, $title: string!, $author: string!, $brief: string!) {
    updateBook(_id: $id, title: $title, author: $author, brief: $brief) {
      _id,
      title,
      author,
      brief
    }
  }
`

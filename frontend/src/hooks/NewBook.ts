import { gql } from "@apollo/client";

export const CREATE_NEW_BOOK = gql`
  mutation createNewBook($title: String!, $author: String!, $brief: String!) {
    createNewBook(title: $title, author: $author, brief: $brief) {
      _id,
      title,
      author,
      brief
    }
  }
`
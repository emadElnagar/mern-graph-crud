import { gql } from "@apollo/client";

export const DELETE_BOOK = gql `
  mutation deleteBook($id: ID!) {
    deleteBook(_id: $id) {
      _id
    }
  }
`

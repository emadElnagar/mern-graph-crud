import { gql, useQuery } from "@apollo/client";

const GET_SINGLE = gql`
  query getSingle($id: ID!) {
    book(_id: $id) {
      _id,
      title,
      brief,
      author
    }
  }
`

export const useSingle = (id: any) => {
  const { error, loading, data } = useQuery(GET_SINGLE, {
    variables: { id }
  });
  return {
    error,
    loading,
    data
  }
}

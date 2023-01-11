import { useQuery, gql } from '@apollo/client'

export const GET_BOOKS = gql`
  query {
    books {
      _id,
      title,
      author,
      brief
    }
  }
`

export const useBooks = () => {
  const { error, loading, data } = useQuery(GET_BOOKS);
  return {
    error,
    loading,
    data
  }
}

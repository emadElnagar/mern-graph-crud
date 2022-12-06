import { useQuery, gql } from '@apollo/client'

const GET_BOOKS = gql`
  query {
    books {
      title,
      brief,
      author
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

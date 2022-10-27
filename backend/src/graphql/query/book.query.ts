import { GraphQLList, GraphQLObjectType } from 'graphql';
import bookType from '../types/book.types';

const GET_ALL_BOOKS = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the query type',
  fields: {
    books: {
      type: new GraphQLList(bookType)
    }
  }
});

export default GET_ALL_BOOKS;

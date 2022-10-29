import { GraphQLList, GraphQLObjectType } from 'graphql';
import bookType from '../types/book.types';
import Book from '../../models/book.models';

const GET_ALL_BOOKS = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the query type',
  fields: {
    books: {
      type: new GraphQLList(bookType),
      resolve() {
        return Book.find();
      }
    }
  }
});

export default GET_ALL_BOOKS;

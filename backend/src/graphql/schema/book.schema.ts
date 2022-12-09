import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GET_ALL_BOOKS } from '../query/book.query';
import { CREATE_NEW_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../mutations/books.mutations';

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Collection Of All Mutations',
  fields: {
    createNewBook: CREATE_NEW_BOOK,
    updateBook: UPDATE_BOOK,
    deleteBook: DELETE_BOOK,
  },
});

const schema = new GraphQLSchema({
  query: GET_ALL_BOOKS,
  mutation: Mutations
});

export default schema;

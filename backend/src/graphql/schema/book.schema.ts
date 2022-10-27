import { GraphQLSchema } from 'graphql';
import GET_ALL_BOOKS from '../query/book.query';

const schema = new GraphQLSchema({
  query: GET_ALL_BOOKS
});

export default schema;

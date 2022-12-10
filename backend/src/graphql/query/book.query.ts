import { GraphQLList, GraphQLObjectType } from 'graphql';
import bookType from '../types/book.types';
import Book from '../../models/book.models';


export const GET_ALL_BOOKS = {
  type: new GraphQLList(bookType),
  resolve() {
    return Book.find();
  }
}

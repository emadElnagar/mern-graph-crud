import { GraphQLID, GraphQLList } from 'graphql';
import bookType from '../types/book.types';
import Book from '../../models/book.models';


export const GET_ALL_BOOKS = {
  type: new GraphQLList(bookType),
  resolve() {
    return Book.find();
  }
}

export const GET_SINGLE_BOOK = {
  type: bookType,
  args: { _id : {type: GraphQLID } },
  resolve(_parent: any, args: { _id: any; }) {
    return Book.findById(args._id);
  }
}

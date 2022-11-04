import { GraphQLString } from 'graphql';
import Book from '../../models/book.models';
import bookType from '../types/book.types';

export const CREATE_NEW_BOOK = {
  type: bookType,
  args: {
    title: { type: GraphQLString },
    brief: { type: GraphQLString },
    author: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { title, brief, author } = args;
    const newBook = await new Book({ title, brief, author }).save();
    return newBook;
  },
}

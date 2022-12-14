import { GraphQLID, GraphQLString } from 'graphql';
import Book from '../../models/book.models';
import bookType from '../types/book.types';

// CREATE NEW BOOK
export const CREATE_NEW_BOOK = {
  type: bookType,
  args: {
    title: { type: GraphQLString },
    brief: { type: GraphQLString },
    author: { type: GraphQLString },
  },
  async resolve(_parent: any, args: any) {
    const { title, brief, author } = args;
    const foundBook = await Book.findOne({title: title});
    if (foundBook) {
      throw new Error("This book already exist");
    }
    const newBook = await new Book({ title, brief, author }).save();
    return newBook;
  },
}

// UPDATE BOOK
export const UPDATE_BOOK = {
  type: bookType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    brief: { type: GraphQLString },
    author: { type: GraphQLString },
  },
  async resolve(_parent: any, args: any) {
    const { _id, title, brief, author } = args;
    await Book.findByIdAndUpdate(_id, { title, brief, author });
  },
}

// DELETE BOOK
export const DELETE_BOOK = {
  type: bookType,
  args: {
    _id: { type: GraphQLID },
  },
  async resolve(_parent: any, args: any) {
    const id = args._id;
    await Book.findByIdAndDelete(id);
  },
}

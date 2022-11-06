import { GraphQLString } from 'graphql';
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
  async resolve(parent: any, args: any) {
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
  args: {
    title: { type: GraphQLString },
    brief: { type: GraphQLString },
    author: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { title, brief, author } = args;
    const book = await Book.findOne({title: title});
    if (!book) {
      throw new Error("This book doesn't exist");
    }
    await Book.updateOne({ title: title }, { brief: brief }, { author: author });
    return { successful: true, message: "Book updated successfully" };
  },
}

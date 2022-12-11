import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const bookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is the book type',
  fields: {
    _id: {
      type: GraphQLID,
      description: 'The unique id for the book'
    },
    title: {
      type: GraphQLString,
      description: 'The title of the book or book name'
    },
    brief: {
      type: GraphQLString,
      description: 'A brief about the book'
    },
    author: {
      type: GraphQLString,
      description: 'The book author'
    }
  }
});

export default bookType;

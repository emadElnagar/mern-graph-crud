import { 
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const bookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is the book type',
  fields: {
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

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the query type',
  fields: {
    books: {
      type: new GraphQLList(bookType)
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

export default schema;

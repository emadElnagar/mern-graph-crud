import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema/book.schema';
import mongoose from 'mongoose';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));
  // Connect database
  mongoose.connect('mongodb://localhost/crudgraph', (err) => {
    if (err) {
      console.log(err);
    }
  });
  // Listen the server
  app.listen(port);
}

main().catch((err) => {
  console.log(err);
});

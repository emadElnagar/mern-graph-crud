import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema/book.schema';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));
  // Listen the server
  app.listen(port);
}

main().catch((err) => {
  console.log(err);
});

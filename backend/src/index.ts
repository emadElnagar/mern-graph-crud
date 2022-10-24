import express from 'express';
import cors from 'cors';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(cors());
  // Listen the server
  app.listen(port);
}

main().catch((err) => {
  console.log(err);
});

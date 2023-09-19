import express from 'express';
import bookRoute from './routes/bookRoute.js';
import connectDB from './config/db.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/books', bookRoute);

try {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is listening port: ${port}`);
  });
} catch (error) {
  process.exit(1);
}

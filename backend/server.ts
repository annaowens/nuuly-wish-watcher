// backend/server.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import postsRoute from './routes/posts';

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Use the posts route for the /posts endpoint
app.use('/posts', postsRoute);

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

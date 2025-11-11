import express, { Request, Response } from 'express';

const port = 8000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

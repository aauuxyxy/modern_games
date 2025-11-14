import express, { Request, Response } from 'express';

const port = 8000;

const app = express();

app.get('/', (req: Request, res: Response) => {
  const result = {
    result: 'hello world',
  };
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

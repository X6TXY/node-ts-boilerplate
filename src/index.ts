import express, { Request, Response } from 'express';
import { logger } from './logger';
import globalRouter from './global-router';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(globalRouter);

app.use('/api/users', (req: Request, res: Response) => {
  res.send('Hello, world');
});

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});

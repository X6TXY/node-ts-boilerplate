import express, { Request, Response } from 'express';
import { logger } from './logger';
<<<<<<< HEAD
import globalRouter from './global-router';
import 'dotenv/config';

=======
>>>>>>> upstream/main
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(globalRouter);

<<<<<<< HEAD
app.use('/api/users', (req: Request, res: Response) => {
  res.send('Hello, world');
});
=======

>>>>>>> upstream/main

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});

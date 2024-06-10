import express from 'express';
import { logger } from './logger';
import UsersRouter from './routes/users';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);

app.use('/api/users', UsersRouter);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

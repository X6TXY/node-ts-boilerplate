import express, { NextFunction } from 'express';
import UsersRouter from './routes/users';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/users', UsersRouter);

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
});
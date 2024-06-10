import express from 'express';
import { logger } from './logger';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger);


app.use('/api/users', (req,res) =>{
    res.send("Hello, world");
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

// Middleware which parse the body of all incomming requests
// and extracts any json data that finds in there 
app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ mesage: err.message });
});

app.listen(3000);
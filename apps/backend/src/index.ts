import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.BACKEND_PORT || 8080;
const app: Express = express();
const routes = require('./routes.ts');

// todo: map these cors to environments
app.use(cors({
    origin:'http://localhost:3001'
}));
app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
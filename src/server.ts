import 'reflect-metadata'
import express from 'express'

import './database/data-source';
import { routes } from './routes/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333,()=>console.log("App is listening at port 3333!"));
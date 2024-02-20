import 'reflect-metadata'
import express from 'express'

import './database/data-source';
import { productsRoutes } from './modules/Products/routes/productsRoutes';

const app = express();

app.use(express.json());

app.use(productsRoutes);

app.listen(3333,()=>console.log("App is listening at port 3333!"));
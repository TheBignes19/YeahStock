import 'reflect-metadata'
import express from 'express'

import './database/data-source';

const app = express();

app.listen(3333,()=>console.log("App is listening at port 3333!"));
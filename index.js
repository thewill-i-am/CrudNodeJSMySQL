import express from 'express';

import { json } from 'body-parser';

import groceryRoutes from './routes/grocery';

import { get404, get500 } from './controllers/error';

const app = express();

const ports = process.env.PORT || 3000;

app.use(json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/groceries', groceryRoutes);

app.use(get404);

app.use(get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));
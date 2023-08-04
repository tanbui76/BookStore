import express from 'express';
import initAPIRoutes from './route/api';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/configJWT';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('Secret', config.secret);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Middleware để gắn 'app' vào 'req'
app.use((req, res, next) => {
    req.app = app;
    next();
});


initAPIRoutes(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

import "dotenv/config";
import express from 'express';
import sqlRouter from './routes/sqlRouter.js'

const server = express();

const port = process.env.PORT || 5000;

server.get('/', (req, res) => res.status(200).json({hello: "welcome to the Express"}));
server.use('/sql', sqlRouter);


server.listen(port, () => console.log(`Server connected to port ${port}`));

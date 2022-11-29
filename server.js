import "dotenv/config";
import express from 'express';
import sqlRouter from './routes/sqlRouter.js'

const server = express();
// --- middleware for enabling to read the body
server.use(express.json());
// --- middleware for enabling to read that not in json form
server.use(express.urlencoded({ extended: true}));

const port = process.env.PORT || 5000;

server.get('/', (req, res) => res.status(200).json({hello: "welcome to the Express"}));
server.use('/sql', sqlRouter);

// --- error handling middleware
server.use((err, req, res, next) => {
    return res.status(500).send(`<h2>${err.message}</h2>`)
} )


server.listen(port, () => console.log(`Server connected to port ${port}`));

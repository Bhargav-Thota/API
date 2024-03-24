import express from 'express';
import pool from './api/db/pg_connection.js';
import config from './api/config/config.js';
import tables from './api/models/tables.js';
import cors from "cors";
import bodyParser from "body-parser";
import router from './api/routes/index.js'
import ApiError from './api/utils/apiError.js'

const app = express();
app.use(cors())
app.use(bodyParser.json())
const logRequest = (req, res, next) => {
    // Logging the API call method and URL as a form of basic logger
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Move to the next middleware
    next();
};

// Registering middleware globally to log for every API request
app.use(logRequest);
app.use('/api/events/', router)
app.use((req, res, next) => {
    next(new ApiError(404, "Not found"));
  });


const startServer = () => {
    app.listen(config.SERVER_PORT, () => {
        console.log(`App listening on port ${config.SERVER_PORT}`);
    });
};

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
        return;
    }
    console.log('PostgreSQL connected successfully');
    startServer(); // Start the Express.js server
});

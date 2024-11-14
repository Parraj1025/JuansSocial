const express = require('express');
const cors = require ('cors');
const connectDB = require('./config/connection.js');
require('dotenv').config()
const router = require( './routes/index.js')


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router)

connectDB().then(app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
}));

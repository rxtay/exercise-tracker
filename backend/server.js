const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');
const mongoose = require('mongoose');

//Load Routers
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')


const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
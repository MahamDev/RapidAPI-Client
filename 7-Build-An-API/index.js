// importing packages
const express = require('express');
const cors = require('cors');
const app = express();
const movies = require('./routes/movies');

// middlewares
app.use(express.json());
app.use(cors());
app.use('/movies', movies);

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
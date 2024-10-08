const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

module.exports = app;

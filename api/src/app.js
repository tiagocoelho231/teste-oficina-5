const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use('/', routes);

module.exports = app;
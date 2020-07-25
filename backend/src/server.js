const express = require('express');
const routes = require('routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://dressup:dressapi@dressup.n3tde.mongodb.net/dressupdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.listen(3333);
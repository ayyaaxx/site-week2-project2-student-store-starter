// YOUR CODE HERE
const express = require('express');
const morgan = require('morgan'); 
const cors = require('cors');
const storeRoutes = require('./routes/storeRoutes');

//create express applicatinon
const app = express();

//mounting middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// app.use('/', (req))

app.use("/", storeRoutes);

module.exports = app; 


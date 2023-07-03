const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors')

require('./db.js');

const server = express();

server.name = 'API';

server.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001']
}))
server.use(express.json());
server.use(morgan('dev'));
server.use('/', routes);


module.exports = server;


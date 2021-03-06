const express = require('express');
const path = require('path');
const fs = require('fs');
const { readdirSync, statSync } = require('fs')
const { join } = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const internalApi = require('./Api.routes.js');
const app = express();

// const p = path.join('C:','\\');
// const dirs = p => readdirSync(p);
// console.log(dirs(p))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));
app.use('/internal', internalApi);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/src/index.html`));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

/* eslint-disable */
server.listen(port, () => console.log(`API running on localhost:${port}`));
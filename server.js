const https = require('https');
const express = require('express');
const arRoutes = require('./arRoutes');
const selfsigned = require('selfsigned');
const app = express();

app.use(express.static('view')); // Serve the view folder
app.use('/', arRoutes);

const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

const server = https.createServer({
  key: pems.private,
  cert: pems.cert
}, app);

server.listen(3000, () => console.log('Server running on https://localhost:3000'));
const express = require('express');
const app = express();
console.log('Hello ' + process.env.NAME)
app.get('/', (req, res) => {
  res.status(200).send('Hello -----------World!').end();
});

module.exports = app

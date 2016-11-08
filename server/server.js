const express = require('express');

var app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {name: 'Andrew', age: 25},
    {name: 'Colt', age: 35},
    {name: 'Stephen', age: 40}
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports.app = app;

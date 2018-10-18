const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const todos = require('./controllers/todos');
const port = 4000;

const jsonParser = bodyParser.json();

app.use(cors());

app.post('/todo', jsonParser, function(req, res) {
  if (req.body && req.body.id) {
    res.send(todos.add(req.body));
  } else {
    res.status(400).send('Todo is missing or missing id.');
  }
});

app.delete('/todo/:id', jsonParser, function(req, res) {
  if (req.body && req.params.id) {
    if (todos.deleteById(req.params.id)) {
      res.status(200).send('OK');
    } else {
      res.status(404).send('Todo not found');
    }
  } else {
    res.status(400).send('Please supply id.');
  }
});

app.get('/todo', function(req, res) {
  res.send(todos.getAll());
});

app.listen(port, () => console.log('Beezwax demo API listening on ' + port));

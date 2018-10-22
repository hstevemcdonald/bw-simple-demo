const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const words = require('./controllers/words');
const port = 4000;

const jsonParser = bodyParser.json();

app.use(cors());

app.post('/words', jsonParser, function(req, res) {
  if (req.body && req.body.words) {
    res.send(words.add(req.body));
  } else {
    res.status(400).send('Missing word(s)');
  }
});

app.get('/words', function(req, res) {
  res.send(words.getAll());
});

app.listen(port, () => console.log('Beezwax demo API listening on ' + port));

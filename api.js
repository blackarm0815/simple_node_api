const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());

let clickCount = {'clicks': 0};
let wordCount = {};

app.get('/', (req, res) => {
  //
  let rangeValue = 0;
  let reponse = {};
  let word = '';
  //
  console.log(req.query);


  // does the query object contain range0001
  if (Object.prototype.hasOwnProperty.call(req.query, 'range0001')) {
    // extract the range value
    rangeValue = req.query['range0001'];
    // send back an object response
    response = {'range0001Updated': rangeValue};
  }

  // does the query object contain textInput0001
  if (Object.prototype.hasOwnProperty.call(req.query, 'textInput0001')) {
    // extract the text
    word = req.query['textInput0001'];
    // if the word has never been used before start counting it
    if (!Object.prototype.hasOwnProperty.call(wordCount, word)) {
      wordCount[word] = 0;
    }
    // count the word
    wordCount[word] += 1;
    // send back an object response
    response = wordCount;
  }

  // does the query object contain button0001
  if (Object.prototype.hasOwnProperty.call(req.query, 'button0001')) {
    // extract the range value
    clickCount['clicks'] += 1;
    // send back an object response
    response = clickCount;
  }

  // does the query object contain checkbox0001
  if (Object.prototype.hasOwnProperty.call(req.query, 'checkbox0001')) {
    if (req.query['checkbox0001'] === 'true') {
      response = {'checkbox0001State': true};
    } else {
      response = {'checkbox0001State': false};
    }
  }

  res.json(response);
});

app.get('/scores', (req, res) => {
  //
  const scores = {
    'alpha': 0,
    'bravo': 1,
    'charlie': 2,
    'delta': 3,
  };

  res.json(scores);
});

app.get('/joystick', (req, res) => {
  //
  console.clear();
  console.log(req.query);
  res.json({});
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log('api listening on port 8000');
});



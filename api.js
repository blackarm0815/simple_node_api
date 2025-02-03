// Requiring module
const express = require('express')
const cors = require('cors')

// Creating express app
const app = express()

// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

const changeRange = (
  rangeValueText,
) => {
  let response = 'not understood';
  const rangeValue = parseInt(rangeValueText, 10);
  if (!Number.isNaN(rangeValue)) {
    response = `range set to ${rangeValue}`;
    console.log(`range set to ${rangeValue}`);
  }
  return response;
};

const changeText = (
  inputText,
) => {
  response = `text input =  ${inputText}`;
  console.log(`text input =  ${inputText}`);
  return response;
};

app.get('/', (req, res) => {
  let response = 'not understood';

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'range0001')) {
    response = changeRange(req.query['range0001']);
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'textInput0001')) {
    response = changeText(req.query['textInput0001']);
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'button0001')) {
    response = changeRange(req.query['button0001']);
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'checkbox0001')) {
    response = changeRange(req.query['checkbox0001']);
  }
  return res.json({'no': 'worries'});
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



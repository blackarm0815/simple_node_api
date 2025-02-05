// Requiring module
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

const changeRange = (
  rangeValueText,
) => {
  let response = 'not understood';
  const rangeValue = parseInt(rangeValueText, 10);
  if (!Number.isNaN(rangeValue)) {
    response = `range set to ${rangeValue}`;
  }
  return response;
};

const changeText = (
  inputText,
) => {
  return `text input = ${inputText}`;
};

const changeButton = () => {
  return 'button0001 was pressed';
};

const changeCheckbox = (
  inputText,
) => {
  return `checkbox0001 = ${inputText}`;
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
    response = changeButton();
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'checkbox0001')) {
    response = changeCheckbox(req.query['checkbox0001']);
  }
  return res.send('testing123');
});

// start the api
app.listen(8000, () => {
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



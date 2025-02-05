// Requiring module
const express = require('express')
const cors = require('cors')
const rpio = require('./node_modules/rpio/lib');
const pin = 15;

/*
* Configure the pin for output, setting it low initially.  The state is set
* prior to the pin being activated, so is suitable for devices which require
* a stable setup.
*/
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

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
  response = `text input = ${inputText}`;
  console.log(`text input = ${inputText}`);
  return response;
};

const changeButton = () => {
  response = 'button0001 was pressed';
  console.log('button0001 was pressed');
  return response;
};

const changeCheckbox = (
  inputText,
) => {
  response = `checkbox0001 = ${inputText}`;
  console.log(`checkbox0001 = ${inputText}`);
  if (inputText === 'true') {
    rpio.write(pin, rpio.HIGH);
  }
  if (inputText === 'false') {
    rpio.write(pin, rpio.LOW);
  }
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
    response = changeButton();
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'checkbox0001')) {
    response = changeCheckbox(req.query['checkbox0001']);
  }
  return res.json({'no': 'worries'});
});

// start the api
app.listen(8000, () => {
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



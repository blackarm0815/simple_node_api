// Requiring module
const express = require('express')
const cors = require('cors')

// Creating express app
const app = express()

// enabling CORS for any unknown origin(https://xyz.example.com)
app.use(cors());

const changeRange = (
  servoSettingText,
) => {
  let response = 'not understood';
  const servoSetting = parseInt(servoSettingText, 10);
  if (!Number.isNaN(servoSetting)) {
    response = `range set to ${servoSetting}`;
    console.log(`servo set to ${servoSetting}`);
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
    response = changeRange(req.query['textInput0001']);
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'button0001')) {
    response = changeRange(req.query['button0001']);
  }

  // check for servo update
  if (Object.prototype.hasOwnProperty.call(req.query, 'checkbox0001')) {
    response = changeRange(req.query['checkbox0001']);
  }
  console.log()
  return res.json({'no': 'worries'});
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



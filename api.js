// express.js handles all the api stuff
const express = require('./node_modules/express');
const app = express();

// turn on
app.get('/turnOn', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send();
  console.log('turn on');
});

// turn on
app.get('/turnOff', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send();
  console.log('turn off');
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log()
  console.log('in a browser, go to the raspberry pi ip address followed by /api')
  console.log();
});

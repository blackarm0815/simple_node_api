// express.js handles all the api stuff
const express = require('./node_modules/express');
const app = express();

app.put('/', (req, res) => {
  console.log(req);
  return res.send('Received a PUT HTTP method');
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log()
  console.log('in a browser, go to the raspberry pi ip address')
  console.log();
});



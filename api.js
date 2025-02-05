// Requiring module
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

app.get('/', (req, res) => {
  let response = 'not recognized';
  console.log(req.query);
  if (Object.prototype.hasOwnProperty.call(req.query, 'button0001')) {
    response = `result is ${req.query['button0001']}`;
  }
  return res.send(response);
});

// start the api
app.listen(8000, () => {
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



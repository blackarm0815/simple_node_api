// Requiring module
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  //
  let response = {'mission': 'failed'};
  //
  if (Object.prototype.hasOwnProperty.call(req.query, 'buttonPressed')) {
    //
    response = {'mission': 'accomplished'};
    //
  }
  res.json(response);
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



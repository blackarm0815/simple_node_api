// Requiring module
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  //
  let response = 'failure';
  //
  if (Object.prototype.hasOwnProperty.call(req.query, 'buttonPressed')) {
    //
    response = 'success';
    //
  }
  return res.send(response);
});

// start the api
app.listen(8000, () => {
  console.log();
  console.log('api listening on port 8000');
  console.log();
});



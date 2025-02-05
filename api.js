const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
let count = {'clicks': 0};

app.get('/', (req, res) => {  
  if (Object.prototype.hasOwnProperty.call(req.query, 'buttonPressed')) {
    count['clicks'] += 1;
  }
  res.json(count);
});

// start the api
app.listen(8000, () => {
  console.clear();
  console.log('api listening on port 8000');
});



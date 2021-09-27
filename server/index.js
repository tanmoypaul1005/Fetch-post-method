const express = require('express')
const app = express();
const port = 5000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userHandler=require('./userHandler/userHandler');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body)
})



mongoose.connect("mongodb://localhost/user",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });

  app.use('/user',userHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
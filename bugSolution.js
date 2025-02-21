const express = require('express');
const app = express();
app.use(express.json({limit: '50mb', extended: true})); //increase limit if needed
app.use(express.urlencoded({ extended: true })); // handles url encoded data
app.post('/data', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
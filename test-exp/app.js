const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  session({
    secret: 'test', 
    resave: true,
    saveUninitialized: true
  })
);

app.post('/data', (req, res) => {
  const data = req.body;
  req.session.data = data; 
  console.log(req.session.data);
  res.send('data ok');
});

app.get('/get-data', (req, res) => {
  const data = req.session.data;
  console.log('test>', req.session.data);
  if (data) {
    res.send(`saved data: ${JSON.stringify(data)}`);
  } else {
    res.send('no data');
  }
});

app.listen(port, () => {
  console.log(`server on ${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Konekcija na bazu
const connection = mysql.createConnection({
  host:'116.203.192.158',
  user:'root',
  password:'Travnik55$',
  database:'adonis'
});

app.post('/PrijaviPozar', (req, res) => {
  const vrijeme = req.body.vrijeme;
  const lokacija = req.body.lokacija;
  const dodinf = req.body.dodinfo;

  console.log(vrijeme);
  console.log(req.body);

  res.json({
    message: "poslano",
  });
});



app.listen(port, () => {
  console.log(`Server započet na portu: ${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Baza podataka
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Povezan na BazuPodataka.');
});

db.run(`CREATE TABLE IF NOT EXISTS pozari (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lokacija TEXT NOT NULL,
  vrijeme TEXT NOT NULL,
  dodInfo TEXT
)`);



app.get('/pozari', (req, res) => {
  db.all(`SELECT * FROM pozari`, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(rows);
    }
  });
});


app.post('/PrijaviPozar', (req, res) => {
  const lokacija = req.body.lokacija;
  const vrijeme = req.body.vrijeme;
  const dodInfo = req.body.dodInfo;

  console.log(dodInfo);
  console.log(lokacija);
  console.log(vrijeme);

  db.run(`INSERT INTO pozari (lokacija, vrijeme, dodInfo) VALUES (?, ?, ?)`, [lokacija, vrijeme, dodInfo], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`Created user with ID ${this.lastID}`);
    }
  });
});

db.run('ALTER TABLE pozari ADD broj_dostupnih;')

const delayInSeconds = 60;


  setTimeout(() => {
    // Use the DELETE statement to delete the row
    db.run(`DELETE FROM pozari WHERE id = (SELECT MAX(id) FROM pozari);`, function(err) {
    });
  }, delayInSeconds * 60);




app.post('/Prijava korisnika', (req, res) => {

});



app.listen(port, () => {
  console.log(`Server započet na portu: ${port}`);
});
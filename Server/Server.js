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


//Displaya prijavljene požare na GET zahtjev
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

//Dodaje prijavljene požare u Bazu podataka
app.post('/PrijaviPozar', (req, res) => {
  const lokacija = req.body.lokacija;
  const vrijeme = req.body.vrijeme;
  const dodInfo = req.body.dodinfo;

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


//Briše prijavu nakon jedne minute
const delayInSeconds = 60;

  setTimeout(() => {
    // Use the DELETE statement to delete the row
    db.run(`DELETE FROM pozari WHERE id = (SELECT MAX(id) FROM pozari);`, function(err) {
    });
  }, delayInSeconds * 60);

  //Dodaje sliku u Bazu podataka
app.post('/slika', (req, res) => {
    const imageData = Buffer.from(req.body.image, 'base64');

    db.run(
      'INSERT INTO pozari (slika) VALUES (?)',
      [imageData],
      function (err) {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to store image in database' });
        } else {
          console.log(`Image stored with ID ${this.lastID}`);
          res.json({ id: this.lastID });
        }
      }
    );
  });
  

//Prijava korisnika
app.post('/Prijava korisnika', (req, res) => {

});

app.post('/Registracija', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const volonter = req.body.password;

  console.log(dodInfo);
  console.log(lokacija);
  console.log(vrijeme);

  db.run(`INSERT INTO korisnici (email, password, volonter) VALUES (?, ?, ?)`, [email, password, volonter], function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`Created user with ID ${this.lastID}`);
    }
  });
});




app.listen(port, () => {
  console.log(`Server započet na portu: ${port}`);
});
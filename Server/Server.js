const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
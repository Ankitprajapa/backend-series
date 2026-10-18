
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

const jsonData = [
  {
    name: "Adeel Solangi",
    language: "Sindhi",
    id: "V59OF92YF627HFY0",
    bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
    version: 6.1
  },
  {
    name: "Afzal Ghaffar",
    language: "Sindhi",
    id: "ENTOCR13RSCLZ6KU",
    bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et.",
    version: 1.88
  },
  {
    name: "Aamir Solangi",
    language: "Sindhi",
    id: "IAKPO3R4761JDRVG",
    bio: "Vestibulum pharetra libero et velit gravida euismod.",
    version: 7.27
  },
  {
    name: "Abla Dilmurat",
    language: "Uyghur",
    id: "5ZVOEPMJUI4MB4EN",
    bio: "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
    version: 2.53
  }
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is my home page");
});

app.get("/json", (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

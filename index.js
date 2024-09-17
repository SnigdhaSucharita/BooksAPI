const cors = require("cors");
const express = require('express');
const app = express();
const { getAllBooks, getBookById } = require("./controllers/index.js");

app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => {
  const books = getAllBooks();
  res.json({books});
});

app.get("/books/details/:id", (req, res) => {
  const book = getBookById(parseInt(req.params.id));
  res.json({book});
});

module.exports = { app };

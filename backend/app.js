var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.status(200).end("Docker is easy")
})

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})

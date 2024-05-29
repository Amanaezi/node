const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/data", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

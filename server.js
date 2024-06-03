const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public/block-inline")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/block-inline", "index.html"));
});

app.listen(PORT, () => {
  console.log("App is running");
});

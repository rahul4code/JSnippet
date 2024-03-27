const express = require("express");
const app = express();

const PORT = 3000;

app.get("/getMessage", (req, res) => {
  res.status(200).send("Hi from Server");
});

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/calculate", (req, res) => {
  const output = eval(req.body.res);
  res.json({ output });
});

app.get("/result", (req, res) => {
  const data = req.query.result;
  res.send(data);
});

app.listen(3000, () => {
  console.log("App is listening");
});

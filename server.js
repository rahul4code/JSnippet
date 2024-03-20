const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  // res.setHeader("Set-Cookie", "name=RahulGupta");
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});

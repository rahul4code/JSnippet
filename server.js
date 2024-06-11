// const express = require("express");
// const app = express();
// const path = require("path");
// const PORT = 3000;

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   // res.setHeader("Set-Cookie", "name=RahulGupta");
// });

// app.listen(PORT, () => {
//   console.log("App is running on port " + PORT);
// });

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// New app using express module

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Create your post and get request here to perform addition
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/calculate", (req, res) => {
  // const {a,b, operand}
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});

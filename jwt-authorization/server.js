require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const posts = [
  {
    user: "Rahul",
    post: 5,
  },
  {
    user: "Devin",
    post: 7,
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user, "req.user");
  res.json(posts.filter((post) => post.user === req.user));
});

app.get("/check", (req, res) => {
  res.json({ msg: "success" });
});

app.post("/login", (req, res) => {
  // assume authenticate user logic using bcrypt
  const { user } = req.body;
  const accessToken = jwt.sign(user, process.env.JWT_SECRET);
  res.json({ accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("Token is missing");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).send("Token is invalid or expired");
    }
    req.user = payload;
    next();
  });
}

app.listen(5000, () => {
  console.log("JWT app is running on port 5000");
});

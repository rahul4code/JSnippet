const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  // res.setHeader("Set-Cookie", "name=RahulGupta");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const registeredUser = users?.find((i) => i.email === email);
    if (registeredUser) {
      if (await bcrypt.compare(password, registeredUser.password)) {
        res.status(200).send("You have successfully logged in");
      } else {
        throw new Error("Incorrect Password");
      }
    } else {
      throw new Error("User is not registered");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/registerUser", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ email, password: hashedPassword });
      res.status(200).send("User registered successfully");
    } else {
      throw new Error("Arguments not present");
    }
  } catch (err) {
    res.status(500).send("Check this error->" + err.message);
  }
});

app.get("/dashboard", (req, res) => {
  // if user authenticated successfully
  res.send("Authenticated User");
});

app.listen(PORT, () => {
  console.log("App is running");
});

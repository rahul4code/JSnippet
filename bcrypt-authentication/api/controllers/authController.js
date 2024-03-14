const bcrypt = require("bcrypt");
const user = require("../../models/user");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const registeredUser = user.getUser()?.find((i) => i.email === email);
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
}

async function register(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.setUser({ email, password: hashedPassword });
      res.status(200).send("User registered successfully");
    } else {
      throw new Error("Arguments not present");
    }
  } catch (err) {
    res.status(500).send("Check this error->" + err.message);
  }
}

module.exports = { login, register };

const express = require("express");
const app = express();

const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public"))); // index.html will be served in root
app.use(express.json());

const userRoutes = require("./api/routes/userRoutes");
const authRoutes = require("./api/routes/authRoutes");

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Bcrypt App is running on port:" + PORT);
});

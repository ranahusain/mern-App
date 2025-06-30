const express = require("express");
const connectDB = require("./db");
const users = require("./routes/users");
const login = require("./routes/login");
const signup = require("./routes/signup");

const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.use(cors());

app.use("/api", users);
app.use("/api", login);
app.use("/api", signup);

app.get("/", (req, res) => {
  console.log("I am inside home page router");
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log("server running at Port :", PORT);
});

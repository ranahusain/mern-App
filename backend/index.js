const express = require("express");
const connectDB = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  console.log("I am inside home page router");
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log("server running at Port :", PORT);
});

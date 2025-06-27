const express = require("express");
const connectDB = require("./db");
const users = require("./routes/users");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

// app.use("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

app.use(cors());

app.use("/api", users);

app.get("/", (req, res) => {
  console.log("I am inside home page router");
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log("server running at Port :", PORT);
});

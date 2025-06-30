// const express = require("express");
// const connectDB = require("./db");
// const users = require("./routes/users");
// const login = require("./routes/login");
// const signup = require("./routes/signup");
// const cors = require("cors");

// import { Server } from "socket.io";
// import { createServer } from "http";

// const app = express();
// const PORT = 3000;

// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connect", (socket) => {
//   socket.on("UserMessage", (message) => {
//     console.log(`message success`);
//     io.emit("UserMessage", message);
//   });
// });

// httpServer.listen(3000, () => {
//   console.log(`Server Started at PORT:3000`);
// });

// app.use(express.json());

// connectDB();

// app.use(cors());

// app.use("/api", users);
// app.use("/api", login);
// app.use("/api", signup);

// app.get("/", (req, res) => {
//   console.log("I am inside home page router");
//   res.send("Welcome");
// });

// app.listen(PORT, () => {
//   console.log("server running at Port :", PORT);
// });
const express = require("express");
const app = express();
const connectDB = require("./db");
const PORT = 3000;

const users = require("./routes/users");
const login = require("./routes/login");
const signup = require("./routes/signup");
const cors = require("cors");

const { Server } = require("socket.io");
const http = require("http");

const httpServer = http.createServer(app); // Fix is here
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  socket.on("UserMessage", (message) => {
    console.log(`message success`);
    io.emit("UserMessage", message);
  });
});

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", users);
app.use("/api", login);
app.use("/api", signup);

app.get("/", (req, res) => {
  console.log("I am inside home page router");
  res.send("Welcome");
});

httpServer.listen(PORT, () => {
  console.log(`Server Started at PORT:${PORT}`);
});

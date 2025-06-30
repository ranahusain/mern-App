import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
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

httpServer.listen(3000, () => {
  console.log(`Server Started at PORT:3000`);
});

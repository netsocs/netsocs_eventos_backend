const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("message", "Welcome to the chat app");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg.text);
  });
});

module.exports = io;

import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

// const socket = io("http://192.168.1.118:3000");

const Chat = () => {
  const [message, setMessageList] = useState([]);
  const [user, setUser] = useState("Hussain");

  function addMessage() {
    const newMessage = document.getElementById("inputMessage").value;
    const message = { text: newMessage, user };
    socket.emit("UserMessage", message);
    document.getElementById("inputMessage").value = "";
  }

  useEffect(() => {
    socket.on("UserMessage", (message) => {
      setMessageList((prevMsgs) => [...prevMsgs, message]);
    });

    return () => {
      socket.off("UserMessage");
    };
  }, []);

  function clearMessage() {
    setMessageList([]);
  }
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      {/* Message List */}
      <div className=" text-white mb-4 max-h-64 overflow-y-auto w-100 ">
        {message.map((msg, index) => (
          <div
            key={index}
            className={`flex  ${
              msg.user === "Hussain"
                ? "bg-white text-black px-4 py-2 m-2 rounded-full justify-end"
                : "bg-gray-700 text-white px-4 py-2  m-2 rounded-full justify-start"
            }`}
          >
            <p className="">{msg.text}</p>
            <p className="text-xs mt-4">{"by " + msg.user}</p>
          </div>
        ))}
      </div>

      {/* Input and Button */}
      <div className="flex space-x-2">
        <input
          type="text"
          id="inputMessage"
          placeholder="Type something..."
          className="px-14 py-2 rounded text-white bg-gray-800 outline-none"
        />
        <button
          onClick={addMessage}
          className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-700 hover:text-white"
        >
          Submit
        </button>
        <button
          onClick={() => setUser(user === "Hussain" ? "Qadeer" : "Hussain")}
          className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-700 hover:text-white"
        >
          {user}
        </button>
        <button
          onClick={clearMessage}
          className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-700 hover:text-white"
        >
          New Chat
        </button>
      </div>
    </div>
  );
};

export default Chat;

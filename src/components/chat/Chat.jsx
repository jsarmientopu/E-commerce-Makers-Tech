import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { Fab } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { message: "Hello! How can we help you?", sender: "bot" },
    { message: "I have a question about your services.", sender: "person" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Create a ref for the chat body
  const chatBodyRef = useRef(null);

  // Toggle the chat box visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add user's message to the chat array
      setMessages([...messages, { message: inputMessage, sender: "person" }]);

      // Clear the input field
      setInputMessage("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { message: "Thanks for your message!", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50 px-4">
          <Fab
            size="large"
            color="primary"
            onClick={toggleChat}
            className="shadow-lg"
            variant="extended"
            style={{
              backgroundColor: "#7e22ce",
            }}
          >
            <ChatIcon sx={{ mr: 1 }} />
            Chat
          </Fab>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 h-3/5 z-50 px-4 ">
          <div className="w-80 h-full bg-white shadow-xl rounded-lg flex flex-col justify-between">
            {/* Chat Header */}
            <div className="flex flex-row justify-between items-center px-4 py-2 bg-blue-600 rounded-t-lg bg-purple-700">
              <h3 className="text-white font-bold">Chat with us!</h3>
              <IconButton
                onClick={toggleChat}
                variant="text"
                size="small"
                style={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </div>

            {/* Chat Body */}
            <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      msg.sender === "person"
                        ? "bg-purple-500 text-white self-end"
                        : "bg-gray-200 self-start"
                    }`}
                  >
                    <p>{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-gray-100 flex items-center space-x-2 rounded-b-lg">
              <TextField
                size="small"
                multiline
                fullWidth
                variant="outlined"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                InputProps={{
                  style: {
                    maxHeight: "25%",
                    overflowY: "auto",
                  },
                }}
                className="resize-none overflow-y-auto" // Tailwind classes for input
              />
              <IconButton
                size="samll"
                onClick={handleSendMessage}
                style={{
                  color: "white",
                  backgroundColor: "#7e22ce",
                }}
              >
                <SendIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;

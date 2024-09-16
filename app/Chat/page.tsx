"use client";
import React, { FC, useEffect, useState } from "react";
import socketIO from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { BsEmojiSmile, BsPaperclip } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import Header from "../components/Header";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  file?: string; // Changed to string to handle file URLs
}

const ChatBox: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Chat");
  const [messages, setMessages] = useState<Message[]>([
    { id: uuidv4(), sender: "bot", text: "Hello! How can I assist you today?" },
    { id: uuidv4(), sender: "user", text: "Can you tell me about NDA courses?" },
    { id: uuidv4(), sender: "bot", text: "Sure! We offer comprehensive courses for NDA preparation covering all subjects." },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const handleNewMessage = (data: Message) => {
      setMessages((prevMessages) => {
        if (!prevMessages.find((msg) => msg.id === data.id)) {
          return [...prevMessages, data];
        }
        return prevMessages;
      });
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, []);

  const handleSend = () => {
    if (newMessage.trim() !== "" || file) {
      const message: Message = {
        id: uuidv4(),
        sender: "user",
        text: newMessage,
        file: file ? URL.createObjectURL(file) : undefined,
      };
      socket.emit("message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
      setFile(null); // Clear file after sending
    }
  };

  const handleEmojiClick = (event: React.MouseEvent, emojiObject: any) => {
    if (emojiObject && emojiObject.emoji) {
      setNewMessage((prevMessage) => prevMessage + emojiObject.emoji);
    }
    setShowEmojiPicker(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileClick = () => {
    document.getElementById("fileInput")?.click();
  };

  return (
    <>
      <Header open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg min-h-screen">
        <div className="flex flex-col mb-4 p-4 border rounded-lg shadow-md dark:border-gray-600">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Chat with Us
          </h2>
          <div className="flex flex-col space-y-3 mb-4 max-h-80 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start mr-auto"
                }`}
              >
                {msg.text}
                {msg.file && (
                  <div className="relative">
                    <img
                      src={msg.file}
                      alt="attachment"
                      className="mt-2 w-32 h-32 object-cover"
                    />
                    <a
                      href={msg.file}
                      download
                      className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-lg"
                    >
                      Download
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 relative">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <BsEmojiSmile
              className="text-xl cursor-pointer"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            />
            <BsPaperclip
              className="text-xl cursor-pointer"
              onClick={handleFileClick}
            />
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

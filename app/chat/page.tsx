"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Paperclip } from "lucide-react";

interface Message {
  id: number;
  text: string;
  translation: string;
  sender: "user" | "artisan";
  language: "english" | "bengali";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm interested in your sarees. Can you tell me more about the weaving process?",
      translation: "নমস্কার! আমি আপনার শাড়ি সম্পর্কে আগ্রহী। আপনি বুননি প্রক্রিয়া সম্পর্কে আরও বলতে পারেন?",
      sender: "user",
      language: "english",
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "নমস্কার! আমাদের শাড়িগুলি সম্পূর্ণ হাতে তৈরি এবং প্রাকৃতিক রঞ্জক দিয়ে রং করা হয়।",
      translation: "Hello! Our sarees are completely handmade and dyed using natural colors.",
      sender: "artisan",
      language: "bengali",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      translation: `Translated: ${inputValue}`, // In real app, call translation API
      sender: "user",
      language: selectedLanguage as "english" | "bengali",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate artisan response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        text: "জি, আমি সাহায্য করতে পারি। আরও কিছু জানতে চান?",
        translation: "Yes, I can help. Do you want to know anything else?",
        sender: "artisan",
        language: "bengali",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return (
    <main className="chat-container">
      {/* SIDEBAR */}
      <div className="chat-sidebar">
        <h3 className="text-lg font-serif text-gold mb-6">Conversations</h3>

        <div className="chat-artisan-item active">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80"
              alt="Renu Dey"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Renu Dey</p>
              <p className="text-xs text-text-muted">Weaver • Phulia</p>
            </div>
          </div>
        </div>

        <div className="chat-artisan-item">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80"
              alt="Sujit Nath"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Sujit Nath</p>
              <p className="text-xs text-text-muted">Potter • Khurja</p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div className="chat-window">
        {/* HEADER */}
        <div className="border-b border-border p-6 flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80"
            alt="Renu Dey"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-serif text-gold">Renu Dey</h2>
            <p className="text-sm text-text-muted">Weaver • Phulia, West Bengal</p>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender === "user" ? "user" : ""}`}>
              <div className="message-bubble">
                <p className="mb-2">{message.text}</p>
                <div className="message-translation">
                  {message.translation}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <div className="chat-input-area">
          <div className="flex-1 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="chat-input flex-1"
            />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="chat-input w-24"
            >
              <option value="english">English</option>
              <option value="bengali">Bengali</option>
            </select>
          </div>
          <button
            onClick={handleSendMessage}
            className="btn btn-primary gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

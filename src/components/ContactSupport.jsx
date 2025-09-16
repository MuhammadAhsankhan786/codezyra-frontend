import { useEffect, useRef, useState } from "react";

const ContactSupport = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  const whatsappNumber = "+923442013217";

  useEffect(() => {
    if (!isOpen) return;

    ws.current = new WebSocket("ws://localhost:5002");

    ws.current.onopen = () => console.log("Connected to WebSocket server");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, { text: data.text, sender: "ai" }]);
    };

    ws.current.onclose = () =>
      console.log("Disconnected from WebSocket server");

    return () => ws.current.close();
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    ws.current.send(
      JSON.stringify({
        text: input,
        history: messages.map((m) => ({
          role: m.sender === "ai" ? "assistant" : "user",
          content: m.text,
        })),
      })
    );

    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 font-bold text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Contact Support</h2>

        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500 text-white px-3 py-2 rounded mb-4 text-center hover:bg-green-600"
        >
          Contact via WhatsApp
        </a>

        {/* Chat Area */}
        <div className="h-64 overflow-y-auto border p-2 mb-2 rounded">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 p-2 rounded ${
                msg.sender === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded px-2 py-1 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-[#43ba7f] text-white px-4 py-1 rounded hover:bg-[#36a56f]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;

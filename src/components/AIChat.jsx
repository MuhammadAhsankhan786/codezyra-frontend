import { useEffect, useRef, useState } from "react";

const AIChat = () => {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ws = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:5002");
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "ai", text: data.text }]);
    };
    return () => ws.current.close();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const history = messages.map((m) => ({
      role: m.from === "ai" ? "assistant" : "user",
      content: m.text,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    ws.current.send(JSON.stringify({ text: userMessage.text, history }));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "ai" ? "justify-start" : "justify-end"
            }`}
          >
            <span
              className={`inline-block px-3 py-1 rounded-lg max-w-[75%] break-words ${
                msg.from === "ai"
                  ? "bg-gray-200 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <span className="bg-gray-200 px-3 py-1 rounded-lg animate-pulse">
              AI is typing...
            </span>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      <div className="flex border-t p-2">
        <input
          type="text"
          className="flex-1 border px-2 py-1 rounded focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChat;

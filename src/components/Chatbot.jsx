import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey! I’m CraftBot. Ask me about hello, projects, or who made me." },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const respond = (content) => {
    const text = content.trim().toLowerCase();
    let reply = '';
    if (text.includes('hello')) reply = "Hey there! I’m CraftBot 👋";
    else if (text.includes('projects')) reply = "You can check out Sam’s projects below!";
    else if (text.includes('who made you')) reply = "I was crafted with love by Sam 💻✨";
    else {
      const picks = [
        'Keep building — every commit counts! 🚀',
        'Bug today, feature tomorrow. You got this! 💪',
        'Small steps lead to big ships. Keep going! ⛵',
      ];
      reply = picks[Math.floor(Math.random() * picks.length)];
    }
    setMessages((m) => [...m, { role: 'user', text: content }, { role: 'bot', text: reply }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    respond(input);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        >
          <MessageCircle /> Chat
        </button>
      )}

      {open && (
        <div className="w-80 sm:w-96 h-96 rounded-xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-emerald-50 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800">CraftBot</p>
              <p className="text-xs text-slate-600">Friendly coding companion</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="p-1 rounded-md hover:bg-white">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === 'bot' ? 'bg-slate-100 text-slate-800' : 'bg-blue-600 text-white ml-auto'}`}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="inline-flex items-center justify-center p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { PiArrowUpBold } from 'react-icons/pi';

const Contact = () => {
  // --- STATE MANAGEMENT ---
  const [step, setStep] = useState(0); // 0: Name, 1: Email, 2: Message, 3: Done
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initial Chat History
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi! I'd love to chat. First, what's your name?",
    },
  ]);

  // Auto-scroll to bottom of chat
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- HANDLERS ---
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();

    // 1. Add User Message immediately
    const newUserMsg = { id: Date.now(), sender: 'user', text: userText };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');

    // 2. Logic based on current step
    if (step === 0) {
      // CAPTURE NAME
      setFormData((prev) => ({ ...prev, name: userText }));
      setStep(1);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: 'bot',
            text: `Nice to meet you, ${userText}! What's the best email to reach you at?`,
          },
        ]);
      }, 600);
    } else if (step === 1) {
      // CAPTURE EMAIL
      setFormData((prev) => ({ ...prev, email: userText }));
      setStep(2);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: 'bot',
            text: 'Perfect. And what did you want to chat about?',
          },
        ]);
      }, 600);
    } else if (step === 2) {
      // CAPTURE MESSAGE & SUBMIT
      const finalData = { ...formData, message: userText };
      setFormData(finalData);
      setStep(3); // Lock input
      setIsSubmitting(true);

      // Submit to Getform
      try {
        await fetch('https://getform.io/f/bpjnpkyb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(finalData),
        });

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              sender: 'bot',
              text: "Thanks! I've received your message and will get back to you soon.",
            },
          ]);
          setIsSubmitting(false);
        }, 800);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: 'bot',
            text: 'Oops, something went wrong sending that. Try emailing me directly!',
          },
        ]);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 pt-16 pb-24 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-3 px-4 sm:px-12 py-4 md:p-2 group">
          <div className="tile-style w-full aspect-[3/4] md:aspect-[2/1] relative rounded-[28px] overflow-hidden bg-apple-gray flex flex-col items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-2xl h-full bg-white rounded-[28px] border border-slate-200/60 shadow-sm overflow-hidden flex flex-col relative">
              <div className="bg-white/80 backdrop-blur-md rounded-t-[28px] border-b border-slate-100 p-3 md:p-4 flex flex-col items-center justify-center z-20 absolute top-0 left-0 right-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 mb-1 overflow-hidden shadow-inner">
                  <img
                    src="/images/memoji.jpg"
                    className="w-full h-full object-cover opacity-90"
                    alt="Spencer"
                  />
                </div>
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-[10px] md:text-xs font-medium text-slate-500">
                    Spencer
                  </span>
                  <span className="text-[10px] md:text-xs text-slate-400">
                    iMessage
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pt-32 md:pt-40 pb-4 px-4 md:px-6 space-y-4 bg-white scroll-smooth">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`flex w-full ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] md:max-w-[70%] px-5 py-3 text-sm md:text-[15px] leading-relaxed shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-[#007AFF] text-white rounded-3xl rounded-tr-sm'
                            : 'bg-[#E9E9EB] text-slate-900 rounded-3xl rounded-tl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={messagesEndRef} className="h-1" />
              </div>

              <div className="p-3 md:p-4 bg-white border-t border-slate-50 z-20">
                <form
                  onSubmit={handleSendMessage}
                  className="relative w-full flex items-center"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={step === 3 ? 'Message sent!' : 'iMessage'}
                    disabled={step === 3 || isSubmitting}
                    className="w-full bg-slate-100 border border-transparent focus:bg-white focus:border-slate-300 focus:ring-4 focus:ring-slate-100 rounded-full px-5 py-3 pr-12 outline-none text-slate-900 placeholder:text-slate-400 text-sm md:text-base transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={step === 3 || !inputValue.trim() || isSubmitting}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200 ${
                      !inputValue.trim() || step === 3
                        ? 'bg-slate-300 scale-90'
                        : 'bg-[#007AFF] hover:bg-blue-600 active:scale-95 shadow-md'
                    }`}
                  >
                    <PiArrowUpBold className="w-4 h-4 font-bold" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

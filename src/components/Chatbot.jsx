import { useState } from "react";
import { Bot, ChevronDown, MessageCircle, Send, X } from "lucide-react";

const quickQuestions = [
  "Which loan is right for me?",
  "What documents do I need?",
  "How can I calculate my EMI?",
  "Contact Us"
];

const getReply = (question) => {
  const normalizedQuestion = question.toLowerCase();

  if (normalizedQuestion.includes("document")) {
    return "You will usually need identity proof, address proof, income documents, and recent bank statements. The exact list depends on your loan type.";
  }

  if (normalizedQuestion.includes("emi")) {
    return "Use our EMI Calculator to estimate your monthly payment. You can adjust the loan amount, interest rate, and tenure to compare options.";
  }

  if (normalizedQuestion.includes("which") || normalizedQuestion.includes("right")) {
    return "We offer personal, home, business, education, and vehicle loans. Tell me your goal and I can point you to the most relevant option.";
  }
  if (normalizedQuestion.includes("Contact") || normalizedQuestion.includes("us")) {
    return "You can reach our customer support team at hr@eliteassociate.in or call us at 9730893320.";
  }

  return "I can help with loan options, documents, and EMI planning. Choose a question above or send me your own question.";
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I’m the ElitePaisa assistant. How can I help with your loan search?",
    },
  ]);

  const sendMessage = (question = message) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), sender: "user", text: trimmedQuestion },
      { id: Date.now() + 1, sender: "bot", text: getReply(trimmedQuestion) },
    ]);
    setMessage("");
  };

  return (
    <div className="chatbot">
      {isOpen && (
        <section className="chatbot-panel" aria-label="ElitePaisa chat assistant">
          <header className="chatbot-header">
            <div className="chatbot-heading">
              <span className="chatbot-avatar"><Bot size={19} /></span>
              <div>
                <h2>ElitePaisa Assistant</h2>
                <p>Here to help with loans</p>
              </div>
            </div>
            <button
              type="button"
              className="chatbot-icon-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={19} />
            </button>
          </header>

          <div className="chatbot-messages" aria-live="polite">
            {messages.map((item) => (
              <p key={item.id} className={`chatbot-message chatbot-message-${item.sender}`}>
                {item.text}
              </p>
            ))}
          </div>

          <div className="chatbot-quick-questions">
            {quickQuestions.map((question) => (
              <button type="button" key={question} onClick={() => sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          <form
            className="chatbot-input-row"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about loans..."
              aria-label="Type a message"
            />
            <button type="submit" aria-label="Send message" disabled={!message.trim()}>
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`chatbot-toggle${isOpen ? " chatbot-toggle-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Minimize chat" : "Open chat assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <ChevronDown size={24} /> : <MessageCircle size={25} />}
      </button>
    </div>
  );
}

export default Chatbot;
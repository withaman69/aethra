import {
  useEffect,
  useState,
  useRef,
} from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import api from "../../services/api";
const AIMentor = () => {
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("mentorChats");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeChat, setActiveChat] =
    useState(null);

  const [messages, setMessages] =
    useState([]);

  const [input, setInput] =
    useState("");
    const [isTyping, setIsTyping] =
  useState(false);

const [sidebarOpen, setSidebarOpen] =
  useState(false);

const messagesEndRef =
  useRef(null);

const [recognition, setRecognition] =
  useState(null);

const [isListening, setIsListening] =
  useState(false);

  useEffect(() => {
    localStorage.setItem(
      "mentorChats",
      JSON.stringify(chats)
    );
  }, [chats]);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, isTyping]);
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Conversation",
      messages: [],
    };

    setChats([
      newChat,
      ...chats,
    ]);

    setActiveChat(
      newChat.id
    );

    setMessages([]);
  };
const deleteChat = (id) => {
  const updatedChats =
    chats.filter(
      (chat) => chat.id !== id
    );

  setChats(updatedChats);

  if (activeChat === id) {
    setActiveChat(null);
    setMessages([]);
  }
};
const renameChat = (id) => {
  const newTitle =
    prompt("Rename Chat");

  if (!newTitle) return;

  setChats(
    chats.map((chat) =>
      chat.id === id
        ? {
            ...chat,
            title: newTitle,
          }
        : chat
    )
  );
};
  const openChat = (chat) => {
    setActiveChat(chat.id);

    setMessages(
      chat.messages || []
    );
  };
const startVoiceInput = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Voice recognition not supported"
    );
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.continuous = true;

  recognition.interimResults = true;

  recognition.onstart = () =>
    setIsListening(true);

  recognition.onend = () =>
    setIsListening(false);

  recognition.onresult = (
    event
  ) => {
    let transcript = "";

    for (
      let i = 0;
      i <
      event.results.length;
      i++
    ) {
      transcript +=
        event.results[i][0]
          .transcript;
    }

    setInput(transcript);
  };

  recognition.start();

  setRecognition(
    recognition
  );
};
const stopVoiceInput = () => {
  if (recognition) {
    recognition.stop();
  }
};
const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = {
    sender: "user",
    text: input,
  };

  const currentInput = input;

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setInput("");

  setIsTyping(true);

  try {
    const res = await api.post(
      "/ai-mentor/ask",
      {
        message: currentInput,
      }
    );

    const aiMessage = {
      sender: "ai",
      text:
        res.data.response ||
        "No response received.",
    };

    const updatedMessages = [
      ...messages,
      userMessage,
      aiMessage,
    ];

    setMessages(updatedMessages);

    setChats(
      chats.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              title:
                chat.title ===
                "New Conversation"
                  ? currentInput.slice(
                      0,
                      25
                    )
                  : chat.title,
              messages:
                updatedMessages,
            }
          : chat
      )
    );
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text:
          "Unable to connect to Aethra AI Mentor.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  return (
  <DashboardLayout>
    <div className="h-[calc(100vh-120px)] flex gap-6">

      {/* Sidebar */}

      <div
        className="
        w-80
        hidden
        lg:flex
        flex-col
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        "
      >
        <div className="p-5">

          <button
            onClick={createNewChat}
            className="
            w-full
            py-4
            rounded-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            hover:scale-[1.02]
            transition-all
            shadow-[0_0_20px_rgba(6,182,212,0.35)]
          "
          >
            + New Chat
          </button>

        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">

          {chats.length === 0 ? (
            <p className="text-slate-500 text-sm">
              No conversations yet
            </p>
          ) : (
            chats.map((chat) => (
              <div
                key={chat.id}
                className={`
                mb-3
                p-4
                rounded-2xl
                cursor-pointer
                transition-all
                ${
                  activeChat === chat.id
                    ? `
                    bg-gradient-to-r
                    from-cyan-500/20
                    to-purple-500/20
                    border
                    border-cyan-400/30
                    `
                    : `
                    bg-white/5
                    border
                    border-white/10
                    hover:bg-white/10
                    `
                }
              `}
                onClick={() => openChat(chat)}
              >
                <div className="flex justify-between items-center">

                  <p className="text-sm font-medium truncate">
                    {chat.title}
                  </p>

                  <div className="flex gap-2">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        renameChat(chat.id);
                      }}
                      className="text-cyan-400 text-xs"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="text-red-400 text-xs"
                    >
                      🗑️
                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

      {/* Chat Section */}

      <div
        className="
        flex-1
        flex
        flex-col
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        "
      >

        {/* Header */}

        <div
          className="
          border-b
          border-white/10
          p-6
          "
        >

          <h1
            className="
            text-4xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            AETHRA AI MENTOR
          </h1>

          <p className="text-slate-400 mt-2">
            Your Personal Career Coach
          </p>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-8">

          <div className="max-w-5xl mx-auto">

            {messages.length === 0 ? (
              <div className="text-center mt-32">

                <h2
                  className="
                  text-6xl
                  font-black
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  mb-5
                "
                >
                  Welcome to Aethra
                </h2>

                <p className="text-slate-400 text-lg">
                  Ask anything about resumes, interviews,
                  roadmaps, jobs, skills, projects and career growth.
                </p>

              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex mb-6 ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-5 py-4 rounded-3xl ${
                        msg.sender === "user"
                          ? `
                          bg-cyan-500/20
                          border
                          border-cyan-500/30
                          backdrop-blur-xl
                          text-white
                        `
                          : `
                          bg-purple-500/20
                          border
                          border-purple-500/30
                          backdrop-blur-xl
                          text-white
                        `
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start mb-6">

                    <div
                      className="
                      bg-purple-500/20
                      border
                      border-purple-500/30
                      rounded-3xl
                      px-5
                      py-4
                      "
                    >

                      <div className="flex gap-2">

                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>

                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{
                            animationDelay: "0.2s",
                          }}
                        />

                        <div
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{
                            animationDelay: "0.4s",
                          }}
                        />

                      </div>

                    </div>

                  </div>
                )}

                <div ref={messagesEndRef}></div>
              </>
            )}

          </div>

        </div>

        {/* Input */}

        <div
          className="
          border-t
          border-white/10
          bg-[#0A0A0F]
          p-5
          "
        >

          <div className="max-w-5xl mx-auto flex gap-4">

            <input
              type="text"
              value={input}
              placeholder="Ask your AI Mentor..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="
              flex-1
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-cyan-400
              "
            />

            <button
              onClick={
                isListening
                  ? stopVoiceInput
                  : startVoiceInput
              }
              className={`
              px-5
              rounded-2xl
              font-bold
              text-white
              ${
                isListening
                  ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                  : "bg-white/10 border border-white/10"
              }
            `}
            >
              {isListening ? "Stop" : "🎤"}
            </button>

            <button
              onClick={handleSend}
              className="
              px-8
              rounded-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              hover:scale-[1.02]
              transition-all
              shadow-[0_0_25px_rgba(6,182,212,0.35)]
              "
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  </DashboardLayout>
);
};

export default AIMentor;
import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import api from "../../services/api";
const Mentor = () => {
const [messages, setMessages] =
useState([
{
role: "assistant",
content:
"Hello Aman 👋 I'm Aethra AI Mentor. How can I help your career today?",
},
]);

const [input, setInput] =
useState("");

const [thinking, setThinking] =
useState(false);


const sendMessage = () => {
if (!input.trim()) return;


const userMessage = input;

setMessages((prev) => [
  ...prev,
  {
    role: "user",
    content: userMessage,
  },
]);

setInput("");

setThinking(true);

setTimeout(() => {
  setThinking(false);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        "This is a demo AI response. Later you will connect Gemini or OpenAI here.",
    },
  ]);
}, 1500);


};

return ( <DashboardLayout> <div className="max-w-7xl mx-auto p-8">

  <div className="mb-8">
    <h1
      className="
      text-5xl
      font-black
      bg-gradient-to-r
      from-cyan-400
      via-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
      mb-3
    "
    >
      AETHRA AI MENTOR
    </h1>

    <p className="text-slate-400">
      Your Personal AI Career Assistant
    </p>
  </div>

  <div
    className="
    h-[750px]
    rounded-3xl
    overflow-hidden
    border
    border-cyan-500/20
    bg-[#080b14]
    shadow-[0_0_40px_rgba(6,182,212,0.15)]
    flex
  "
  >

    {/* Sidebar */}

    <div
      className="
      w-80
      border-r
      border-white/10
      bg-[#0d1220]
      p-5
    "
    >

      <button
        className="
        w-full
        py-4
        rounded-2xl
        font-bold
        text-white
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        hover:scale-[1.02]
        transition-all
      "
      >
        + New Chat
      </button>

      <div className="mt-6 space-y-3">

        <div className="bg-white/5 rounded-xl p-4 text-slate-300">
          Resume Review
        </div>

        <div className="bg-white/5 rounded-xl p-4 text-slate-300">
          Career Roadmap
        </div>

        <div className="bg-white/5 rounded-xl p-4 text-slate-300">
          Interview Prep
        </div>

      </div>

    </div>

    {/* Chat Area */}

    <div className="flex-1 flex flex-col bg-[#080b14]">

      {/* Header */}

      <div
        className="
        h-20
        border-b
        border-white/10
        flex
        items-center
        px-8
        bg-[#0b1020]
      "
      >

        <div>

          <h2 className="text-xl font-bold text-white">
            Aethra AI Mentor
          </h2>

          <p className="text-slate-400 text-sm">
            Your Personal Career Coach
          </p>

        </div>

      </div>

      {/* Messages */}

      <div
        className="
        flex-1
        overflow-y-auto
        p-8
        bg-gradient-to-b
        from-[#080b14]
        via-[#0c1220]
        to-[#080b14]
      "
      >

        {messages.length === 1 ? (

          <div className="h-full flex items-center justify-center">

            <div className="text-center">

              <div className="text-7xl mb-4">
                🤖
              </div>

              <h2
                className="
                text-5xl
                font-black
                bg-gradient-to-r
                from-cyan-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
              >
                Welcome to Aethra
              </h2>

              <p className="text-slate-400 mt-4 text-lg max-w-2xl">
                Ask anything about careers,
                resumes, interviews,
                projects, skills and roadmaps.
              </p>

            </div>

          </div>

        ) : (

          <div className="space-y-5">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >

                  <div
                    className={
                      msg.role === "user"
                        ? `
                          bg-cyan-500/20
                          border
                          border-cyan-500/30
                          rounded-3xl
                          px-5
                          py-3
                          max-w-2xl
                          text-white
                        `
                        : `
                          bg-purple-500/20
                          border
                          border-purple-500/30
                          rounded-3xl
                          px-5
                          py-3
                          max-w-2xl
                          text-white
                        `
                    }
                  >
                    {msg.content}
                  </div>

                </div>

              )
            )}

            {thinking && (

              <div className="flex justify-start">

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

                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>

                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>

                  </div>

                </div>

              </div>

            )}

          </div>

        )}

      </div>

      {/* Input */}

      <div
        className="
        border-t
        border-white/10
        bg-[#0b1020]
        p-5
        flex
        gap-4
      "
      >

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask your AI Mentor..."
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
          onClick={sendMessage}
          className="
          px-8
          rounded-2xl
          font-bold
          text-white
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          hover:scale-[1.02]
          transition-all
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

export default Mentor;

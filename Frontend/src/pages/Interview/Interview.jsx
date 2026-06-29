import { useState, useEffect } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
startInterview,
submitInterview,
} from "../../features/interview/interviewApi";

const Interview = () => {
const [role, setRole] =
useState("");

const [level, setLevel] =
useState("Beginner");

const [interview, setInterview] =
useState(null);

const [answers, setAnswers] =
useState([]);

const [result, setResult] =
useState(null);

const [isListening, setIsListening] =
useState(false);

const [recognition, setRecognition] =
useState(null);

useEffect(() => {
const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.log(
    "Speech Recognition not supported"
  );
  return;
}

const recognitionInstance =
  new SpeechRecognition();

recognitionInstance.continuous =
  false;

recognitionInstance.interimResults =
  false;

recognitionInstance.lang =
  "en-US";

recognitionInstance.onend =
  () => {
    setIsListening(false);
  };

setRecognition(
  recognitionInstance
);


}, []);

const startListening = (index) => {
  console.log("startListening called");

  if (!recognition) {
    console.log("Recognition is null");
    alert(
      "Speech Recognition is not available."
    );
    return;
  }

  recognition.onstart = () => {
    console.log("Recording Started");
    setIsListening(true);
  };

  recognition.onend = () => {
    console.log("Recording Ended");
    setIsListening(false);
  };

  recognition.onerror = (event) => {
    console.log(
      "Speech Error:",
      event.error
    );

    setIsListening(false);

    alert(
      `Speech Recognition Error: ${event.error}`
    );
  };

 recognition.onresult = (event) => {
  const transcript =
    event.results[0][0].transcript;

  console.log(
    "Transcript:",
    transcript
  );

  setAnswers((prev) => {
    const updated = [
      ...prev,
    ];

    updated[index] =
      (updated[index] || "") +
      " " +
      transcript;

    return updated;
  });
};

  try {
    recognition.start();
  } catch (error) {
    console.log(
      "Start Error:",
      error
    );
  }
};

const stopListening = () => {
  if (recognition) {
    recognition.stop();

    setIsListening(
      false
    );
  }
};

const speakQuestion = (
question
) => {
const speech =
new SpeechSynthesisUtterance(
question
);


speech.rate = 1;

speech.pitch = 1;

window.speechSynthesis.speak(
  speech
);


};

const handleStart =
async () => {
try {
const data =
await startInterview(
role,
level
);

    setInterview(
      data.data
    );

    setAnswers(
      new Array(
        data.data.questions.length
      ).fill("")
    );
  } catch (error) {
    console.error(error);
  }
};


const handleAnswerChange = (
index,
value
) => {
const updated =
[...answers];

updated[index] =
  value;

setAnswers(updated);

};

const handleSubmit =
async () => {
try {
const formattedAnswers =
interview.questions.map(
(
question,
index
) => ({
question,
answer:
answers[
index
],
})
);

    const data =
      await submitInterview(
        {
          interviewId:
            interview._id,
          answers:
            formattedAnswers,
        }
      );

    setResult(data);
  } catch (error) {
    console.error(error);
  }
};

return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto p-8">

      {/* Header */}

      <div className="mb-10">

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
        "
        >
          AI Mock Interview
        </h1>

        <p className="text-slate-400 mt-3">
          Practice real interview questions with AI.
        </p>

      </div>

      {/* Interview Setup */}

      {!interview && (
        <div
          className="
          max-w-2xl
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
        "
        >

          <h2 className="text-2xl font-bold text-cyan-300 mb-6">
            Start Interview
          </h2>

          <input
            type="text"
            placeholder="Full Stack Developer"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="
            w-full
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-4
            text-white
            mb-6
          "
          />

          {/* Level Selector */}

          <div className="grid grid-cols-3 gap-4 mb-6">

            {[
              "Beginner",
              "Intermediate",
              "Advanced",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setLevel(item)
                }
                className={`
                  p-4
                  rounded-2xl
                  border
                  transition-all

                  ${
                    level === item
                      ? `
                      bg-gradient-to-r
                      from-cyan-500/20
                      to-purple-500/20
                      border-cyan-400/40
                      text-cyan-300
                    `
                      : `
                      bg-white/5
                      border-white/10
                      text-slate-400
                    `
                  }
                `}
              >
                {item}
              </button>
            ))}

          </div>

          <button
            onClick={handleStart}
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
          "
          >
            Start Interview
          </button>

        </div>
      )}

      {/* Questions */}

      {interview && !result && (
        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
        "
        >

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-purple-300">
              Interview Session
            </h2>

            <span
              className="
              bg-cyan-500/20
              border
              border-cyan-500/30
              px-4
              py-2
              rounded-full
              text-cyan-300
            "
            >
              {level}
            </span>

          </div>

          <div className="space-y-8">

            {interview.questions.map(
              (question, index) => (
                <div
                  key={index}
                  className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                "
                >

                  <div className="flex justify-between items-center mb-4">

                    <h3 className="text-xl font-bold text-white">
                      Q{index + 1}. {question}
                    </h3>

                    <button
                      type="button"
                      onClick={() =>
                        speakQuestion(
                          question
                        )
                      }
                      className="
                      bg-purple-500/20
                      border
                      border-purple-500/30
                      px-4
                      py-2
                      rounded-xl
                    "
                    >
                      🔊 Read
                    </button>

                  </div>

                  <textarea
                    rows="5"
                    value={
                      answers[index]
                    }
                    onChange={(e) =>
                      handleAnswerChange(
                        index,
                        e.target.value
                      )
                    }
                    placeholder="Type your answer..."
                    className="
                    w-full
                    bg-black/20
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    text-white
                  "
                  />

                  <div className="flex gap-3 mt-4">

                    <button
                      type="button"
                      onClick={() =>
                        startListening(
                          index
                        )
                      }
                      className="
                      bg-cyan-500/20
                      border
                      border-cyan-500/30
                      px-4
                      py-3
                      rounded-xl
                    "
                    >
                      {isListening
                        ? "🎙 Listening..."
                        : "🎤 Record"}
                    </button>

                    <button
                      type="button"
                      onClick={
                        stopListening
                      }
                      className="
                      bg-red-500/20
                      border
                      border-red-500/30
                      px-4
                      py-3
                      rounded-xl
                    "
                    >
                      🛑 Stop
                    </button>

                  </div>

                </div>
              )
            )}

          </div>

          <button
            onClick={handleSubmit}
            className="
            mt-8
            w-full
            py-4
            rounded-2xl
            font-bold
            bg-gradient-to-r
            from-green-500
            to-emerald-500
          "
          >
            Submit Interview
          </button>

        </div>
      )}

      {/* Result */}

      {result && (
        <div
          className="
          max-w-3xl
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
          text-center
        "
        >

          <h2
            className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-green-400
            to-cyan-400
            bg-clip-text
            text-transparent
            mb-8
          "
          >
            Interview Result
          </h2>

          <div
            className="
            text-7xl
            font-black
            text-cyan-300
            mb-6
          "
          >
            {result.score}
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
          "
          >

            <h3 className="text-2xl font-bold mb-4">
              AI Feedback
            </h3>

            <p className="text-slate-300 leading-relaxed">
              {Array.isArray(
                result.feedback
              )
                ? result.feedback.join(
                    ", "
                  )
                : result.feedback}
            </p>

          </div>

        </div>
      )}

    </div>
  </DashboardLayout>
);
};

export default Interview;

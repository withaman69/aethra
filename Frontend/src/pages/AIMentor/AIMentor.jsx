import {
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  askMentor,
} from "../../features/aiMentor/aiMentorApi";

const AIMentor = () => {
  const [message, setMessage] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleAsk =
    async () => {
      if (!message.trim())
        return;

      try {
        setLoading(true);

        const data =
          await askMentor(
            message
          );

        setResponse(
          data.response
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to get AI response"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          AI Career Mentor
        </h1>

        <div className="bg-white rounded-xl shadow p-6">

          <textarea
            rows="5"
            className="w-full border rounded-lg p-4"
            placeholder="Ask anything about your career..."
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            {loading
              ? "Thinking..."
              : "Ask Mentor"}
          </button>

        </div>

        {response && (
          <div className="mt-8 bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Response
            </h2>

            <div className="whitespace-pre-wrap">
              {response}
            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default AIMentor;
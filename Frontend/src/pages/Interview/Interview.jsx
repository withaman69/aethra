import {
  useState,
  useEffect,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  startInterview,
  evaluateInterview,
  getInterviewHistory,
  submitInterview,
} from "../../features/interview/interviewApi";

const Interview = () => {
  const [role, setRole] =
    useState("");

  const [level, setLevel] =
    useState("Beginner");

  const [questions, setQuestions] =
    useState([]);

  const [
    interviewId,
    setInterviewId,
  ] = useState(null);

  const [answer, setAnswer] =
    useState("");

  const [
    evaluation,
    setEvaluation,
  ] = useState(null);

  const [
    history,
    setHistory,
  ] = useState([]);

  const [
    finalResult,
    setFinalResult,
  ] = useState(null);

  const handleGenerate =
    async () => {
      try {
        const data =
          await startInterview(
            role,
            level
          );

        setInterviewId(
          data.data._id
        );

        setQuestions(
          data.data.questions
        );

        setAnswer("");

        setEvaluation(
          null
        );

        setFinalResult(
          null
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to start interview"
        );
      }
    };

  const handleEvaluate =
    async (question) => {
      try {
        const data =
          await evaluateInterview(
            question,
            answer
          );

        setEvaluation(data);
      } catch (error) {
        console.error(error);

        alert(
          "Failed to evaluate answer"
        );
      }
    };

  const handleSubmitInterview =
    async () => {
      try {
        const answers = [
          {
            question:
              questions[0],
            answer,
          },
        ];

        const data =
          await submitInterview(
            interviewId,
            answers
          );

        setFinalResult(data);

        fetchHistory();
      } catch (error) {
        console.error(error);

        alert(
          "Failed to submit interview"
        );
      }
    };

  const fetchHistory =
    async () => {
      try {
        const data =
          await getInterviewHistory();

        setHistory(
          data.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Mock Interview
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Target Role
            </label>

            <input
              type="text"
              placeholder="Frontend Developer / Backend Developer / Full Stack Developer"
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Experience Level
            </label>

            <select
              value={level}
              onChange={(e) =>
                setLevel(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-3"
            >
              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>
            </select>
          </div>

          <button
            onClick={
              handleGenerate
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Generate Questions
          </button>

        </div>

        {questions.length >
          0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Interview Questions
            </h2>

            <div className="space-y-6">

              {questions.map(
                (
                  question,
                  index
                ) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4"
                  >
                    <p className="font-medium mb-4">
                      Q
                      {index + 1}
                      .{" "}
                      {
                        question
                      }
                    </p>

                    <textarea
                      rows="4"
                      value={
                        answer
                      }
                      onChange={(e) =>
                        setAnswer(
                          e.target
                            .value
                        )
                      }
                      placeholder="Write your answer..."
                      className="w-full border rounded-lg p-3"
                    />

                    <div className="flex gap-3 mt-4">

                      <button
                        onClick={() =>
                          handleEvaluate(
                            question
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Evaluate Answer
                      </button>

                      <button
                        onClick={
                          handleSubmitInterview
                        }
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                      >
                        Submit Interview
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        )}

        {evaluation && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Evaluation Result
            </h2>

            <p className="text-lg">
              <strong>
                Score:
              </strong>{" "}
              {
                evaluation.score
              }
              /10
            </p>

            <p className="mt-3">
              <strong>
                Feedback:
              </strong>{" "}
              {
                evaluation.feedback
              }
            </p>

          </div>
        )}

        {finalResult && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Final Interview Result
            </h2>

            <p>
              <strong>
                Score:
              </strong>{" "}
              {
                finalResult.score
              }
            </p>

            <p className="mt-2">
              <strong>
                Feedback:
              </strong>{" "}
              {finalResult.feedback?.join(
                ", "
              )}
            </p>

          </div>
        )}

        {history.length >
          0 && (
          <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-4">
              Interview History
            </h2>

            <div className="space-y-4">

              {history.map(
                (
                  item
                ) => (
                  <div
                    key={
                      item._id
                    }
                    className="border rounded-lg p-4"
                  >
                    <p>
                      <strong>
                        Role:
                      </strong>{" "}
                      {
                        item.role
                      }
                    </p>

                    <p>
                      <strong>
                        Score:
                      </strong>{" "}
                      {
                        item.score
                      }
                    </p>

                    <p>
                      <strong>
                        Date:
                      </strong>{" "}
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default Interview;
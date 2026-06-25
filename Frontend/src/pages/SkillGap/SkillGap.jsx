import {
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getSkillGap,
} from "../../features/skillGap/skillGapApi";

const SkillGap = () => {
  const [
    roadmapId,
    setRoadmapId,
  ] = useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleAnalyze =
    async () => {
      try {
        setLoading(true);

        const data =
          await getSkillGap(
            roadmapId
          );

        setResult(
          data.data
        );
      } catch (error) {
        console.error(error);

        alert(
          "Failed to analyze skill gap"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Skill Gap Analysis
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">

          <label className="block mb-2 font-medium">
            Roadmap ID
          </label>

          <input
            type="text"
            value={roadmapId}
            onChange={(e) =>
              setRoadmapId(
                e.target.value
              )
            }
            placeholder="Enter Roadmap ID"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <button
            onClick={
              handleAnalyze
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Analyze Skill Gap
          </button>

        </div>

        {loading && (
          <div className="bg-white p-6 rounded-xl shadow">
            Loading...
          </div>
        )}

        {result && (
          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-4">
              Analysis Result
            </h2>

            <pre className="whitespace-pre-wrap">
              {JSON.stringify(
                result,
                null,
                2
              )}
            </pre>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default SkillGap;
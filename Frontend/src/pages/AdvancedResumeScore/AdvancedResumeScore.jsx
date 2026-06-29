import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getAdvancedResumeScore } from "../../features/resume/resumeApi";

const AdvancedResumeScore = () => {
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const data = await getAdvancedResumeScore();
        setScoreData(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading Advanced Resume Score...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Advanced Resume Score
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            ATS Score
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-6">

            <div
              className="bg-green-600 h-6 rounded-full"
              style={{
                width: `${scoreData?.score || 0}%`,
              }}
            />

          </div>

          <p className="text-4xl font-bold mt-4">
            {scoreData?.score}/100
          </p>

          <p className="mt-3 text-lg">
            Status:
            <span className="font-bold ml-2 text-blue-600">
              {scoreData?.status}
            </span>
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-500">
              Education
            </h3>

            <p className="text-4xl font-bold mt-3">
              {scoreData?.educationCount}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-500">
              Experience
            </h3>

            <p className="text-4xl font-bold mt-3">
              {scoreData?.experienceCount}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-500">
              Projects
            </h3>

            <p className="text-4xl font-bold mt-3">
              {scoreData?.projectCount}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-500">
              Certifications
            </h3>

            <p className="text-4xl font-bold mt-3">
              {scoreData?.certificationCount}
            </p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default AdvancedResumeScore;
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getResumeScore,
} from "../../features/resume/resumeApi";

const ResumeScore = () => {
  const [scoreData, setScoreData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchScore =
      async () => {
        try {
          const data =
            await getResumeScore();

          setScoreData(
            data.data
          );
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
          Loading Resume Score...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Resume Score
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6">
            Resume Analysis
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-6">

            <div
              className="bg-blue-600 h-6 rounded-full"
              style={{
                width: `${scoreData?.score || 0}%`,
              }}
            />

          </div>

          <p className="text-5xl font-bold mt-6">
            {scoreData?.score}/100
          </p>

          <div className="mt-6">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {scoreData?.status}
            </span>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="font-bold text-xl mb-3">
              Score Guide
            </h3>

            <ul className="space-y-2">

              <li>
                70+ = Excellent
              </li>

              <li>
                40+ = Good
              </li>

              <li>
                Below 40 = Needs Improvement
              </li>

            </ul>

          </div>

          <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="font-bold text-xl mb-3">
              Tips
            </h3>

            <ul className="space-y-2">

              <li>
                Add skills
              </li>

              <li>
                Complete profile bio
              </li>

              <li>
                Upload profile picture
              </li>

              <li>
                Add career goals
              </li>

            </ul>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default ResumeScore;
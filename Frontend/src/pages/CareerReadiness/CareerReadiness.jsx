import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getCareerReadiness } from "../../features/reports/reportApi";

const CareerReadiness = () => {
const [readiness, setReadiness] =
useState(null);

const [loading, setLoading] =
useState(true);

useEffect(() => {
const fetchReadiness =
async () => {
try {
const data =
await getCareerReadiness();

      setReadiness(
        data.data
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

fetchReadiness();


}, []);

if (loading) {
return ( <DashboardLayout> <div className="p-10 text-center text-xl">
Loading Career Analysis... </div> </DashboardLayout>
);
}

const score =
readiness?.readinessScore || 0;

return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto p-8">

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
          Career Readiness
        </h1>

        <p className="text-slate-400 mt-3">
          AI-powered analysis of your career progress.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Score */}

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          flex
          flex-col
          items-center
        "
        >
          <div className="relative w-56 h-56">

            <svg className="w-56 h-56 rotate-[-90deg]">
              <circle
                cx="112"
                cy="112"
                r="95"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="14"
                fill="none"
              />

              <circle
                cx="112"
                cy="112"
                r="95"
                stroke="#22d3ee"
                strokeWidth="14"
                fill="none"
                strokeDasharray="597"
                strokeDashoffset={
                  597 -
                  (597 * score) / 100
                }
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h2 className="text-6xl font-black text-white">
                {score}%
              </h2>

              <p className="text-cyan-300">
                Ready
              </p>

            </div>

          </div>

          <div className="mt-6 text-center">

            <h3 className="text-xl font-bold text-white">
              Overall Career Score
            </h3>

            <p className="text-slate-400 mt-2">
              Based on profile, projects,
              skills, certifications and interviews.
            </p>

          </div>

        </div>

        {/* Status */}

        <div
          className="
          lg:col-span-2
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
        "
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-6">
            Career Status
          </h2>

          <div
            className="
            bg-cyan-500/10
            border
            border-cyan-500/20
            rounded-2xl
            p-6
            mb-6
          "
          >
            <h3 className="text-2xl font-bold text-cyan-300">
              {readiness?.status}
            </h3>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">
            AI Recommendation
          </h3>

          <div className="space-y-4">

            {score >= 80 && (
              <div
                className="
                bg-green-500/10
                border
                border-green-500/20
                rounded-2xl
                p-5
                text-green-300
              "
              >
                ✓ You are ready for job applications
                and technical interviews.
              </div>
            )}

            {score >= 60 &&
              score < 80 && (
                <div
                  className="
                  bg-yellow-500/10
                  border
                  border-yellow-500/20
                  rounded-2xl
                  p-5
                  text-yellow-300
                "
                >
                  ⚡ Improve projects, complete
                  roadmap milestones and strengthen
                  certifications.
                </div>
              )}

            {score < 60 && (
              <div
                className="
                bg-red-500/10
                border
                border-red-500/20
                rounded-2xl
                p-5
                text-red-300
              "
              >
                ⚠ Focus on skills, projects,
                certifications and mock interviews.
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid md:grid-cols-3 gap-8 mt-8">

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
        "
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-5">
            Strengths
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>✓ Resume Profile</li>
            <li>✓ ATS Readiness</li>
            <li>✓ Career Planning</li>
          </ul>
        </div>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
        "
        >
          <h3 className="text-2xl font-bold text-yellow-300 mb-5">
            Improve
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>• More Projects</li>
            <li>• Certifications</li>
            <li>• Mock Interviews</li>
          </ul>
        </div>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-6
        "
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-5">
            Next Steps
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>→ Complete Roadmaps</li>
            <li>→ Improve Skills</li>
            <li>→ Practice Interviews</li>
          </ul>
        </div>

      </div>

    </div>
  </DashboardLayout>
);
};

export default CareerReadiness;

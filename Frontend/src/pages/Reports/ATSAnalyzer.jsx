import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  analyzeResume,
  getLatestAnalysis,
} from "../../features/ats/atsApi";

const ATSAnalyzer = () => {
  const [analysis, setAnalysis] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [analyzing, setAnalyzing] =
    useState(false);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis =
    async () => {
      try {
        const res =
          await getLatestAnalysis();

        setAnalysis(
          res.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleAnalyze =
    async () => {
      try {
        setAnalyzing(true);

        const res =
          await analyzeResume();

        setAnalysis(
          res.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setAnalyzing(false);
      }
    };

return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto p-8">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

        <div>
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
            ATS Resume Analyzer
          </h1>

          <p className="text-slate-400 mt-3">
            Analyze your resume against modern ATS systems
          </p>
        </div>

        <button
          onClick={handleAnalyze}
          className="
          px-8 py-4
          rounded-2xl
          font-bold
          text-white
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          hover:scale-[1.02]
          transition-all
          shadow-[0_0_25px_rgba(6,182,212,0.35)]
        "
        >
          {analyzing
            ? "Analyzing..."
            : "Analyze Resume"}
        </button>

      </div>

      {loading ? (
        <div className="text-center py-32 text-slate-400 text-xl">
          Loading Analysis...
        </div>
      ) : !analysis ? (
        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-12
          text-center
        "
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            No Analysis Found
          </h2>

          <p className="text-slate-400">
            Click Analyze Resume to generate your ATS report.
          </p>
        </div>
      ) : (
        <>
          <div
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-10
            mb-8
          "
          >
            <div className="flex justify-center">

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
                      (597 * analysis.score) /
                        100
                    }
                    strokeLinecap="round"
                  />

                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <h2 className="text-6xl font-black text-white">
                    {analysis.score}%
                  </h2>

                  <p className="text-cyan-300">
                    ATS Score
                  </p>

                </div>

              </div>

            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

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
              <h3 className="text-2xl font-bold text-green-300 mb-6">
                Found Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {analysis.foundKeywords?.map(
                  (
                    skill,
                    index
                  ) => (
                    <span
                      key={index}
                      className="
                      bg-green-500/20
                      border
                      border-green-500/30
                      text-green-300
                      px-4
                      py-2
                      rounded-full
                    "
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>
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
              <h3 className="text-2xl font-bold text-red-300 mb-6">
                Missing Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {analysis.missingKeywords?.map(
                  (
                    skill,
                    index
                  ) => (
                    <span
                      key={index}
                      className="
                      bg-red-500/20
                      border
                      border-red-500/30
                      text-red-300
                      px-4
                      py-2
                      rounded-full
                    "
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>
            </div>

          </div>

          <div
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            mt-8
          "
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-6">
              AI Suggestions
            </h3>

            <div className="space-y-4">

              {analysis.suggestions?.map(
                (
                  suggestion,
                  index
                ) => (
                  <div
                    key={index}
                    className="
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    rounded-2xl
                    p-4
                    text-slate-300
                  "
                  >
                    ✓ {suggestion}
                  </div>
                )
              )}

            </div>
          </div>

        </>
      )}

    </div>
  </DashboardLayout>
);
};

export default ATSAnalyzer;
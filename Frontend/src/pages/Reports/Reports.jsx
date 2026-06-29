import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getResumeScore,
  getAdvancedResumeScore,
  getCareerReadiness,
  getJobReadinessReport,
  downloadPdfReport,
} from "../../features/reports/reportApi";

const Reports = () => {
  const [resumeScore, setResumeScore] =
    useState(null);

  const [advancedScore, setAdvancedScore] =
    useState(null);

  const [readiness, setReadiness] =
    useState(null);

  const [report, setReport] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const resumeData =
            await getResumeScore();

          const advancedData =
            await getAdvancedResumeScore();

          const readinessData =
            await getCareerReadiness();

          const reportData =
            await getJobReadinessReport();

          setResumeScore(
            resumeData.data
          );

          setAdvancedScore(
            advancedData.data
          );

          setReadiness(
            readinessData.data
          );

          setReport(
            reportData.report
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          Loading Reports...
        </div>
      </DashboardLayout>
    );
  }

return (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto p-6">

      <h1
        className="
        text-5xl
        font-black
        mb-10
        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-purple-500
        bg-clip-text
        text-transparent
      "
      >
        Career Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

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
          <h2 className="text-slate-400 font-semibold">
            Resume Score
          </h2>

          <p className="text-5xl font-black mt-4 text-cyan-400">
            {resumeScore?.score || 0}
          </p>

          <p className="mt-3 text-slate-300">
            {resumeScore?.status}
          </p>
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
          <h2 className="text-slate-400 font-semibold">
            ATS Score
          </h2>

          <p className="text-5xl font-black mt-4 text-purple-400">
            {advancedScore?.score || 0}
          </p>

          <p className="mt-3 text-slate-300">
            {advancedScore?.status}
          </p>
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
          <h2 className="text-slate-400 font-semibold">
            Career Readiness
          </h2>

          <p className="text-5xl font-black mt-4 text-green-400">
            {readiness?.readinessScore || 0}%
          </p>

          <p className="mt-3 text-slate-300">
            {readiness?.status}
          </p>
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
          <h2 className="text-slate-400 font-semibold">
            Overall Status
          </h2>

          <p className="text-2xl font-bold mt-6 text-yellow-400">
            {report?.overallStatus}
          </p>
        </div>

      </div>

      {report && (
        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          mb-8
          "
        >

          <h2 className="text-3xl font-bold mb-6 text-white">
            Job Readiness Report
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div
              className="
              bg-white/5
              rounded-2xl
              p-5
              border
              border-white/10
              "
            >
              <p className="text-slate-400">
                ATS Score
              </p>

              <h3 className="text-3xl font-bold text-cyan-400 mt-2">
                {report.atsScore}
              </h3>
            </div>

            <div
              className="
              bg-white/5
              rounded-2xl
              p-5
              border
              border-white/10
              "
            >
              <p className="text-slate-400">
                Career Readiness
              </p>

              <h3 className="text-3xl font-bold text-green-400 mt-2">
                {report.careerReadiness}%
              </h3>
            </div>

            <div
              className="
              bg-white/5
              rounded-2xl
              p-5
              border
              border-white/10
              "
            >
              <p className="text-slate-400">
                Suggestions
              </p>

              <h3 className="text-3xl font-bold text-purple-400 mt-2">
                {report.suggestionCount}
              </h3>
            </div>

            <div
              className="
              bg-white/5
              rounded-2xl
              p-5
              border
              border-white/10
              "
            >
              <p className="text-slate-400">
                Status
              </p>

              <h3 className="text-3xl font-bold text-yellow-400 mt-2">
                {report.overallStatus}
              </h3>
            </div>

          </div>

        </div>
      )}

      <button
        onClick={downloadPdfReport}
        className="
        px-8
        py-4
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
        Download Career PDF Report
      </button>

    </div>
  </DashboardLayout>
);
};

export default Reports;
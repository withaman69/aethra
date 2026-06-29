import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getInterviewHistory,
} from "../../features/interview/interviewApi";

const InterviewHistory = () => {
  const [
    interviews,
    setInterviews,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    const fetchHistory =
      async () => {
        try {
          const data =
            await getInterviewHistory();

          setInterviews(
            data.data
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchHistory();
  }, []);

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
          Interview History
        </h1>

        <p className="text-slate-400 mt-3">
          Review all your AI mock interview attempts and performance.
        </p>

      </div>

      {loading ? (

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
          <p className="text-slate-400 text-lg">
            Loading Interviews...
          </p>
        </div>

      ) : interviews.length === 0 ? (

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-16
          text-center
        "
        >

          <div className="text-7xl mb-4">
            🎯
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            No Interviews Yet
          </h2>

          <p className="text-slate-400">
            Complete your first mock interview to see results here.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-2 gap-6">

          {interviews.map((interview) => (

            <div
              key={interview._id}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-6
              hover:border-cyan-400/30
              transition-all
            "
            >

              <div className="flex justify-between items-center mb-5">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    {interview.role}
                  </h2>

                  <p className="text-slate-400 text-sm mt-1">
                    {new Date(
                      interview.createdAt
                    ).toLocaleDateString()}
                  </p>

                </div>

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-purple-500/20
                  border
                  border-cyan-400/30
                "
                >

                  <span className="text-2xl font-black text-cyan-300">
                    {interview.score}
                  </span>

                </div>

              </div>

              <div className="mb-6">

                <div className="flex justify-between mb-2">

                  <span className="text-slate-400">
                    Performance
                  </span>

                  <span className="text-cyan-300 font-semibold">
                    {interview.score}%
                  </span>

                </div>

                <div className="w-full bg-black/20 rounded-full h-3">

                  <div
                    className="
                    h-3
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-500
                  "
                    style={{
                      width: `${interview.score}%`,
                    }}
                  />

                </div>

              </div>

              {interview.feedback &&
                interview.feedback.length > 0 && (

                <div
                  className="
                  bg-black/20
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                "
                >

                  <h3 className="text-lg font-bold text-purple-300 mb-4">
                    AI Feedback
                  </h3>

                  <div className="space-y-3">

                    {interview.feedback.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="
                          flex
                          gap-3
                          text-slate-300
                        "
                        >

                          <span className="text-cyan-400">
                            ✓
                          </span>

                          <span>
                            {item}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </div>

  </DashboardLayout>
);
};

export default InterviewHistory;
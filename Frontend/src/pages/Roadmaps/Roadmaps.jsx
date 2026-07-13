import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";


import {
  getRoadmaps,
  generateAIRoadmap,
} from "../../features/roadmaps/roadmapApi";
import {
getProgress,
saveProgress,
} from "../../features/roadmaps/roadmapProgressApi";
import ReactMarkdown from "react-markdown";
const Roadmaps = () => {
const [roadmaps, setRoadmaps] =
useState([]);
const [careerGoal, setCareerGoal] =
  useState("");

const [generatedRoadmap,
  setGeneratedRoadmap] =
  useState("");

const [aiLoading,
  setAiLoading] =
  useState(false);
const [loading, setLoading] =
useState(true);

const [search, setSearch] =
useState("");

const [progressData, setProgressData] =
useState({});

const navigate =
useNavigate();

useEffect(() => {
const fetchData =
async () => {
try {
const roadmapRes =
await getRoadmaps();


      setRoadmaps(
        roadmapRes.data || []
      );

      const progressRes =
        await getProgress();

      const progressMap =
        {};

      progressRes.data.forEach(
        (item) => {
          progressMap[
            item.roadmapId?._id ||
              item.roadmapId
          ] =
            item.completedSteps ||
            [];
        }
      );

      setProgressData(
        progressMap
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

fetchData();


}, []);

const handleGenerateRoadmap =
  async () => {

    if (!careerGoal) {
      alert(
        "Enter Career Goal"
      );
      return;
    }

    try {

      setAiLoading(true);

      const res =
        await generateAIRoadmap(
          careerGoal,
          []
        );

      setGeneratedRoadmap(
        res.data
      );

    } catch (error) {

      console.error(error);

      alert(
        "Roadmap Generation Failed"
      );

    } finally {

      setAiLoading(false);

    }
  };

const toggleStep =
async (
roadmapId,
stepIndex
) => {
const current =
progressData[
roadmapId
] || [];


  let updated;

  if (
    current.includes(
      stepIndex
    )
  ) {
    updated =
      current.filter(
        (i) =>
          i !==
          stepIndex
      );
  } else {
    updated = [
      ...current,
      stepIndex,
    ];
  }

  setProgressData(
    (prev) => ({
      ...prev,
      [roadmapId]:
        updated,
    })
  );

  try {
    await saveProgress(
      roadmapId,
      updated
    );
  } catch (error) {
    console.error(error);
  }
};


const filteredRoadmaps =
roadmaps.filter(
(roadmap) =>
roadmap.title
?.toLowerCase()
.includes(
search.toLowerCase()
) ||
roadmap.careerPath
?.toLowerCase()
.includes(
search.toLowerCase()
)
);

return ( 
<DashboardLayout>
   <div className="max-w-7xl mx-auto p-8">


  <div className="mb-10">

    <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      Career Roadmaps
    </h1>

    <p className="text-slate-400 mt-3">
      Follow structured learning paths and track progress.
    </p>

  </div>

  <div className="space-y-4 mb-8">

  <input
    type="text"
    placeholder="Search Roadmaps..."
    value={search}
    onChange={(e) =>
      setSearch(
        e.target.value
      )
    }
    className="
      w-full
      bg-white/5
      border
      border-white/10
      rounded-2xl
      px-5
      py-3
      text-white
    "
  />

  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Enter Career Goal (e.g. Machine Learning Engineer)"
      value={careerGoal}
      onChange={(e) =>
        setCareerGoal(
          e.target.value
        )
      }
      className="
        flex-1
        bg-white/5
        border
        border-white/10
        rounded-2xl
        px-5
        py-3
        text-white
      "
    />

    <button
      onClick={
        handleGenerateRoadmap
      }
      className="
        px-6
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-purple-500
      "
    >

      {aiLoading
        ? "Generating..."
        : "Generate AI Roadmap"}

    </button>

  </div>

</div>
{generatedRoadmap && (

  <div
    className="
    mb-8
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-6
    "
  >

    <h2
      className="
      text-2xl
      font-bold
      text-cyan-300
      mb-4
      "
    >
      AI Generated Roadmap
    </h2>

 <div
  className="
    prose
    prose-invert
    max-w-none
    prose-headings:text-cyan-300
    prose-strong:text-purple-300
    prose-li:text-slate-200
  "
>
  <ReactMarkdown>
    {generatedRoadmap}
  </ReactMarkdown>
</div>

  </div>

)}
  {loading ? (
    <div className="text-center py-20 text-cyan-300 text-xl">
      Loading Roadmaps...
    </div>
  ) : filteredRoadmaps.length === 0 ? (
    <div className="text-center py-20 text-slate-400">
      No Roadmaps Found
    </div>
  ) : (
    <div className="grid xl:grid-cols-2 gap-8">

      {filteredRoadmaps.map((roadmap) => {
        const completed =
          progressData[
            roadmap._id
          ] || [];

        const totalSteps =
          roadmap.steps?.length || 0;

        const percentage =
          totalSteps > 0
            ? Math.round(
                (completed.length /
                  totalSteps) *
                  100
              )
            : 0;

        return (
          <div
            key={roadmap._id}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-6
            hover:border-cyan-400/40
            hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
            transition-all
            "
          >

            <div className="flex justify-between items-start mb-5">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  {roadmap.title}
                </h2>

                <p className="text-cyan-300 mt-2">
                  {roadmap.careerPath}
                </p>

              </div>

              <span
                className="
                px-3
                py-1
                rounded-full
                bg-purple-500/20
                border
                border-purple-500/30
                text-purple-300
                text-sm
                "
              >
                {roadmap.difficulty}
              </span>

            </div>

            <p className="text-slate-300 mb-5">
              {roadmap.description}
            </p>

            <div className="mb-6">

              <div className="flex justify-between mb-2">

                <span className="text-slate-400">
                  Progress
                </span>

                <span className="text-cyan-300 font-bold">
                  {percentage}%
                </span>

              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>

            <div className="mb-6">

              <span className="text-slate-400">
                Estimated Duration:
              </span>

              <p className="text-white mt-1">
                {roadmap.estimatedDuration}
              </p>

            </div>

            <button
              onClick={() =>
                navigate(
                  `/skill-gap/${roadmap._id}`
                )
              }
              className="
              w-full
              mb-6
              py-3
              rounded-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              hover:scale-[1.02]
              transition-all
              "
            >
              Analyze Skill Gap
            </button>

            <div>

              <h3 className="font-bold text-white mb-4">
                Learning Path
              </h3>

              <div className="space-y-3">

                {roadmap.steps?.map(
                  (step, index) => (
                    <label
                      key={index}
                      className="
                      flex
                      items-center
                      gap-3
                      cursor-pointer
                      p-3
                      rounded-xl
                      bg-white/5
                      "
                    >

                      <input
                        type="checkbox"
                        checked={completed.includes(
                          index
                        )}
                        onChange={() =>
                          toggleStep(
                            roadmap._id,
                            index
                          )
                        }
                      />

                      <span
                        className={
                          completed.includes(
                            index
                          )
                            ? "line-through text-slate-500"
                            : "text-slate-200"
                        }
                      >
                        {step}
                      </span>

                    </label>
                  )
                )}

              </div>

            </div>

          </div>
        );
      })}

    </div>
  )}

</div>


  </DashboardLayout>
);

};

export default Roadmaps;

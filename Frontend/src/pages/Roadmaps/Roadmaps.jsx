import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getRoadmaps,
} from "../../features/roadmaps/roadmapApi";

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchRoadmaps =
      async () => {
        try {
          const data =
            await getRoadmaps();

          setRoadmaps(
            data.data
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    fetchRoadmaps();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">

        <h1 className="text-4xl font-bold mb-8">
          Career Roadmaps
        </h1>

        {loading ? (
          <p>
            Loading roadmaps...
          </p>
        ) : roadmaps.length ===
          0 ? (
          <p>
            No roadmaps found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {roadmaps.map(
              (roadmap) => (
                <div
                  key={
                    roadmap._id
                  }
                  className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
                >

                  <h2 className="text-2xl font-bold mb-3">
                    {
                      roadmap.title
                    }
                  </h2>

                  <p className="text-gray-600 mb-3">
                    {
                      roadmap.description
                    }
                  </p>

                  <div className="space-y-2">

                    <p>
                      <span className="font-semibold">
                        Career Path:
                      </span>{" "}
                      {
                        roadmap.careerPath
                      }
                    </p>

                    <p>
                      <span className="font-semibold">
                        Difficulty:
                      </span>{" "}
                      {
                        roadmap.difficulty
                      }
                    </p>

                    <p>
                      <span className="font-semibold">
                        Duration:
                      </span>{" "}
                      {
                        roadmap.estimatedDuration
                      }
                    </p>

                  </div>

                  {roadmap.steps &&
                    roadmap.steps
                      .length >
                      0 && (
                      <div className="mt-4">

                        <h3 className="font-semibold mb-2">
                          Learning Steps
                        </h3>

                        <ul className="list-disc pl-5 space-y-1">

                          {roadmap.steps.map(
                            (
                              step,
                              index
                            ) => (
                              <li
                                key={
                                  index
                                }
                              >
                                {
                                  step
                                }
                              </li>
                            )
                          )}

                        </ul>

                      </div>
                    )}

                </div>
              )
            )}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default Roadmaps;
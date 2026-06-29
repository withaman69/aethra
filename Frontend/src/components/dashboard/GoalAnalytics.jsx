import {
  useEffect,
  useState,
} from "react";

import {
  getGoalAnalytics,
} from "../../features/goals/goalAnalyticsApi";

const GoalAnalytics = () => {
  const [
    analytics,
    setAnalytics,
  ] = useState(null);

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const data =
            await getGoalAnalytics();

          setAnalytics(
            data.data
          );
        } catch (error) {
          console.error(error);
        }
      };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        Goal Analytics
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p>Total Goals</p>
          <h3 className="text-3xl font-bold">
            {
              analytics?.totalGoals
            }
          </h3>
        </div>

        <div>
          <p>Completed</p>
          <h3 className="text-3xl font-bold">
            {
              analytics?.completedGoals
            }
          </h3>
        </div>

        <div>
          <p>In Progress</p>
          <h3 className="text-3xl font-bold">
            {
              analytics?.inProgressGoals
            }
          </h3>
        </div>

        <div>
          <p>Average Progress</p>
          <h3 className="text-3xl font-bold">
            {
              analytics?.averageProgress
            }
            %
          </h3>
        </div>

      </div>

    </div>
  );
};

export default GoalAnalytics;
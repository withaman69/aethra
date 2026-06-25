import { useEffect, useState } from "react";

import {
  getSuggestions,
} from "../../features/dashboard/dashboardApi";

const AIInsights = () => {
  const [suggestions, setSuggestions] =
    useState([]);

  useEffect(() => {
    const fetchSuggestions =
      async () => {
        try {
          const data =
            await getSuggestions();
console.log(data);
          setSuggestions(
            data.suggestions
          );
        } catch (error) {
          console.error(error);
        }
      };

    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        AI Insights
      </h2>

      <div className="space-y-3">

        {suggestions.map(
          (
            suggestion,
            index
          ) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-slate-100"
            >
              {suggestion}
            </div>
          )
        )}

      </div>

    </div>
  );
};

export default AIInsights;
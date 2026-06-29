import api from "../../api/axios";

export const getGoalAnalytics =
  async () => {
    const response =
      await api.get(
        "/goal-analytics"
      );

    return response.data;
  };
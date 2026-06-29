import api from "../../api/axios";

export const getProgress =
  async () => {
    const response =
      await api.get(
        "/roadmap-progress/my-progress"
      );

    return response.data;
  };

export const saveProgress =
  async (
    roadmapId,
    completedSteps
  ) => {
    const response =
      await api.post(
        "/roadmap-progress/save",
        {
          roadmapId,
          completedSteps,
        }
      );

    return response.data;
  };
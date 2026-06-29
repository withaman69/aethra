import api from "../../api/axios";

export const getAdvancedResumeScore =
  async () => {
    const response =
      await api.get(
        "/advanced-resume-score"
      );

    return response.data;
  };
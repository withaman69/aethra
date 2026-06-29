import api from "../../api/axios";

export const getResumeScore =
  async () => {
    const response =
      await api.get(
        "/resume-score"
      );

    return response.data;
  };
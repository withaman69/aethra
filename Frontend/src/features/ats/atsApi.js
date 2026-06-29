import api from "../../api/axios";

export const analyzeResume =
  async () => {
    const response =
      await api.post(
        "/ats/analyze"
      );

    return response.data;
  };

export const getLatestAnalysis =
  async () => {
    const response =
      await api.get(
        "/ats/latest"
      );

    return response.data;
  };
import api from "../../api/axios";

export const getAIRecommendations =
  async () => {
    const response =
      await api.get(
        "/ai/recommendations"
      );

    return response.data;
  };
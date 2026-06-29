import api from "../../api/axios";

export const getCareerReadiness =
  async () => {
    const response =
      await api.get(
        "/career-readiness"
      );

    return response.data;
  };
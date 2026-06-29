import api from "../../api/axios";

export const getJobReadinessReport =
  async () => {
    const response =
      await api.get(
        "/job-readiness-report"
      );

    return response.data;
  };
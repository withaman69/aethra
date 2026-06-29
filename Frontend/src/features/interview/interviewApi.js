import api from "../../api/axios";

export const startInterview =
  async (role, level) => {
    const response =
      await api.post(
        "/interviews/start",
        {
          role,
          level,
        }
      );

    return response.data;
  };


export const submitInterview =
  async (data) => {
    const response =
      await api.post(
        "/interview/submit",
        data
      );

    return response.data;
  };


export const getInterviewHistory =
  async () => {
    const response =
      await api.get(
        "/interviews/history"
      );

    return response.data;
  };
  export const evaluateInterview =
  async (
    question,
    answer
  ) => {
    const response =
      await api.post(
        "/interview-evaluation/evaluate",
        {
          question,
          answer,
        }
      );

    return response.data;
  };
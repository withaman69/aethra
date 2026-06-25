import api from "../../api/axios";

export const askMentor = async (
  message
) => {
  const response =
    await api.post(
      "/ai-mentor/chat",
      {
        message,
      }
    );

  return response.data;
};
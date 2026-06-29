import api from "../../api/axios";

export const getChats =
  async () => {
    const response =
      await api.get("/mentor/chats");

    return response.data;
  };

export const createChat =
  async (title) => {
    const response =
      await api.post(
        "/mentor/chats",
        { title }
      );

    return response.data;
  };

export const saveMessage =
  async (
    chatId,
    message
  ) => {
    const response =
      await api.post(
        `/mentor/chats/${chatId}/message`,
        message
      );

    return response.data;
  };
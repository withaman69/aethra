import api from "../../api/axios";

export const uploadAvatar = async (file) => {
  const formData = new FormData();

  formData.append("avatar", file);

  const response = await api.post(
    "/upload/avatar",
    formData
  );

  return response.data;
};
import api from "../../api/axios";

export const uploadResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  const response = await api.post(
    "/resume/upload",
    formData
  );

  return response.data;
};

export const getResume = async () => {
  const response = await api.get(
    "/resume"
  );

  return response.data;
};


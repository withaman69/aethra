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

export const getResumeScore = async () => {
  const response = await api.get("/resume-score");
  return response.data;
};

export const getAdvancedResumeScore = async () => {
  const response = await api.get("/advanced-resume-score");
  return response.data;
};

export const deleteResume =
  async () => {
    const response =
      await api.delete(
        "/resume"
      );

    return response.data;
  };
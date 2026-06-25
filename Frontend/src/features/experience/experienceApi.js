import api from "../../api/axios";

export const getExperiences = async () => {
  const response = await api.get("/experience");
  return response.data;
};

export const createExperience = async (
  experienceData
) => {
  const response = await api.post(
    "/experience",
    experienceData
  );

  return response.data;
};

export const deleteExperience = async (
  id
) => {
  const response = await api.delete(
    `/experience/${id}`
  );

  return response.data;
};
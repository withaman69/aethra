import api from "../../api/axios";

export const getRoadmaps = async () => {
  const response = await api.get("/roadmaps");
  return response.data;
};

export const getRoadmapById = async (id) => {
  const response = await api.get(`/roadmaps/${id}`);
  return response.data;
};
export const generateAIRoadmap =
  async (
    careerGoal,
    currentSkills = []
  ) => {

    const response =
      await api.post(
        "/ai-roadmap-generator/generate",
        {
          careerGoal,
          currentSkills,
        }
      );

    return response.data;
  };
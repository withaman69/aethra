import api from "../../api/axios";

export const getDashboardStats = async () => {
  const [
    skills,
    projects,
    goals,
    certifications,
  ] = await Promise.all([
    api.get("/skills"),
    api.get("/projects"),
    api.get("/goals"),
    api.get("/certifications"),
  ]);

  return {
    skills: skills.data.count,
    projects: projects.data.count,
    goals: goals.data.count,
    certifications:
      certifications.data.count,
  };
};
export const getDashboardSummary = async () => {
  const response = await api.get(
    "/dashboard/summary"
  );

  return response.data;
};
export const getSuggestions =
  async () => {
    const response =
      await api.get(
        "/ats-suggestions"
      );

    return response.data;
  };
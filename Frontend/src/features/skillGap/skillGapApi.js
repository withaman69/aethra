import api from "../../api/axios";

export const getSkillGap = async (
  roadmapId
) => {
  const response =
    await api.get(
      `/skill-gap/${roadmapId}`
    );

  return response.data;
};
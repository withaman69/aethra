import api from "../../api/axios";

export const getGoals = async () => {
  const response = await api.get("/goals");
  return response.data;
};

export const createGoal = async (goalData) => {
  const response = await api.post(
    "/goals",
    goalData
  );

  return response.data;
};

export const deleteGoal = async (id) => {
  const response = await api.delete(
    `/goals/${id}`
  );

  return response.data;
};
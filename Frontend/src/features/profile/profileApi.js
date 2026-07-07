import api from "../../api/axios";

export const getProfile = async () => {
  const response = await api.get(
    "/users/profile"
  );

  return response.data;
};

export const updateProfile = async (
  profileData
) => {
  const response = await api.put(
    "/users/profile",
    profileData
  );

  return response.data;
};
export const updateAvatar =
  async (file) => {
    const formData =
      new FormData();

    formData.append(
      "avatar",
      file
    );

    const response =
      await api.put(
        "/profile/avatar",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };
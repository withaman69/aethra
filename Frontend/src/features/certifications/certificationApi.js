import api from "../../api/axios";

export const getCertifications =
  async () => {
    const response =
      await api.get(
        "/certifications"
      );

    return response.data;
  };

export const createCertification =
  async (
    certificationData
  ) => {
    const response =
      await api.post(
        "/certifications",
        certificationData
      );

    return response.data;
  };

export const deleteCertification =
  async (id) => {
    const response =
      await api.delete(
        `/certifications/${id}`
      );

    return response.data;
  };
import api from "../../api/axios";

// Login
export const loginUser = async (
userData
) => {
const response = await api.post(
"/auth/login",
userData
);

return response.data;
};

// Register
export const registerUser = async (
userData
) => {
const response = await api.post(
"/auth/register",
userData
);

return response.data;
};

// Forgot Password
export const forgotPassword = async (
data
) => {
const response = await api.post(
"/auth/forgot-password",
data
);

return response.data;
};

// Reset Password
export const resetPassword = async (
token,
password
) => {
const response = await api.put(
`/auth/reset-password/${token}`,
{ password }
);

return response.data;
};

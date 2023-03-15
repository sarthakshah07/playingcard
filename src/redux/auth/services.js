import axiosInstance from "../../services/api";

// login apis url
const LoginUserUrl = "/api/login";

export const loginWithEmailAsync = async (request) => {
  try {
    const response = await axiosInstance.get(LoginUserUrl, request);
    return response;
  } catch (err) {
    return err;
  }
};

import axiosInstance from "../../services/api";

// login apis url
const LoginUserUrl = "/api/login";
const LogoutUserUrl = "/api/logout";

export const loginWithEmailAsync = async (request) => {
  try {
    const response = await axiosInstance.post(LoginUserUrl, request);
    return response;
  } catch (err) {
    return err;
  }
};

export const logoutAsync = async (request) => {
  try {
    const response = await axiosInstance.get(LogoutUserUrl, request);
    return response;
  } catch (err) {
    return err;
  }
};
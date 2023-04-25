import axiosInstance from "../../services/api";

// login apis url
  // const LoginUserUrl = "/api/login";
 const LoginUserUrl = "/login";
 const LogoutUserUrl = "/api/logout";
 const SignUpUrl = "/users/add";
 const ForgotUserUrl = "/forgotpassword";
const ResetUserUrl = "/resetpassword"

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
export const signUpAsync = async (request) => {
  try {
    const response = await axiosInstance.post(SignUpUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};
export const forgotAsync = async (request) => {
  try {
    const response = await axiosInstance.post(ForgotUserUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};
export const resetAsync = async (request) => {
  try {
    const response = await axiosInstance.post(ResetUserUrl, request);
    console.log("api response", response);
    return response;
  } catch (err) {
    console.log("error",err);
    return err;
  }
};
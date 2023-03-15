import axiosInstance from "../../services/api";

// login apis url
const fetchCardsUrl = "/api/users";
export const fetchCardsAsync = async (request) => {
  try {
    const response = await axiosInstance.get(fetchCardsUrl);
    return response;
  } catch (err) {
    return err;
  }
};

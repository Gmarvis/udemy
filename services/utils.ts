import { SITE_URL } from "./constant";
import ApiCall from "./httpClient";

const apiCall = new ApiCall();

export const signUp = (newUser: {
  name: string;
  email: string;
  password: string;
}) => {
  return apiCall.POST(SITE_URL + "/auth/signup", newUser);
};

export const login = (returningUser: { email: string; password: string }) => {
  return apiCall.POST(SITE_URL + "/auth/login", returningUser);
};

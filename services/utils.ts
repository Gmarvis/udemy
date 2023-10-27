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

export const getUser = (token: string) => {
  return apiCall.GET(SITE_URL + "/auth/user/" + token);
};

export const createCourse = (couresData: {
  category: string;
  description: string;
  image: string;
  language: string;
  level: string;
  materials: [];
  price: number;
  subTitle: string;
  subcategory: string;
  title: string;
}) => {
  return apiCall.POST(SITE_URL + "/courses", couresData);
};

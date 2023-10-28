import { SITE_URL } from "@/services/constant";
import axios from "axios";

export const server = axios.create({
  baseURL: SITE_URL,
});

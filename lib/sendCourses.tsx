import { server } from "./config";
import { LOCAL_STORAGE } from "@/services/storage";
export const saveForLater = async (value: any) => {
  console.log(" in function, id value:", value);
  const data = {
    id: value,
  };

  const token = LOCAL_STORAGE.get("token");
  console.log(" token:", token);
  const resp = await server.post("/courses/saveforlater", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (resp && resp.data) {
    console.log(resp.data);
    return resp;
  }

  return null;
};

import { CartItemType } from "@/types";
import { server } from "./config";
import { LOCAL_STORAGE } from "@/services/storage";
import toast from "react-hot-toast";

export const saveForLater = async (value: any): Promise<any> => {
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

export const sendPurshaseListToDB = async (
  purshasedCourses: CartItemType[]
): Promise<any> => {
  console.log("purshasedCourses: ", purshasedCourses);

  const token = LOCAL_STORAGE.get("token");
  console.log(" token:", token);
  const currentUser = LOCAL_STORAGE.get("currentUser");
  if (currentUser && token) {
    const listOfCoursesIds = [...purshasedCourses].map((course) => course.id);

    const data = {
      courseIds: listOfCoursesIds,
      userId: currentUser.id,
    };

    console.log(data);

    const resp = await server.post("/purchasedcourse", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if ((resp && resp.status === 201) || 200) {
      console.log(resp.data);
      return resp.data;
    }
    return null;
  } else {
    toast.error("Need to login first");
    return null;
  }

  return null;
};

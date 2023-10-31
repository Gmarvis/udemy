import { CartItemType } from "@/types";
import { server } from "./config";
import { LOCAL_STORAGE } from "@/services/storage";
import toast from "react-hot-toast";

let saveforlater: CartItemType[] = [];

export const saveForLater = async (value: any): Promise<any> => {
  console.log(" in function, id value:", value);
  const currentUser = LOCAL_STORAGE.get("currentUser");

  const data = {
    courseId: value,
    userId: currentUser.id,
  };

  const token = LOCAL_STORAGE.get("token");
  console.log(" token:", token);
  const resp = await server.post("/saveforlater", data, {
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
  // console.log("purshasedCourses: ", purshasedCourses);

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

    if (resp && resp.data) {
      console.log(resp.data);
      return resp.data;
    }
    return null;
  } else {
    toast.error("Need to login first");
    return null;
  }
};

export const removeSavedCourse = async (courseId: string) => {
  console.log("Removing saved course frontend");
  const currentUser = LOCAL_STORAGE.get("currentUser");
  const token = LOCAL_STORAGE.get("token");
  console.log(" token:", token);
  if (currentUser && token) {
    const data = {
      courseId,
      userId: currentUser.id,
    };

    console.log(data);

    const resp = await server.delete("/saveforlater", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      data,
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
};

export const logout = async () => {
  const token = LOCAL_STORAGE.get("token");
  server
    .post("/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response && response.data.token) {
        // localStorage.removeItem("token");
      }
    })
    .catch((error) => console.log(error));
};

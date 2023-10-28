<<<<<<< HEAD
"use client"
=======
"use client";

>>>>>>> 5fb8853a6e647158fc6182076f6966d80d3acd87
type OPTIONS = {
  type: "STRING" | "OBJECT";
};

export class LOCAL_STORAGE {
  
  static save(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string, options: OPTIONS = { type: "OBJECT" }) {
    let data: any;

    if (typeof window !== "undefined") {
      data = localStorage.getItem(key);
    }

    if (data) {
      if (options.type === "STRING")
        return data;
      return JSON.parse(data);
    }
  }

  // static delete(key: string) {
  //   return localStorage.removeItem(key);
  // }
}

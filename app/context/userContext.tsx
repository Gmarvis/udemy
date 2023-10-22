"use client";
import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext({});
const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(0);
  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

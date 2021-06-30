import { createContext, useContext } from "react";

const userContext = createContext({}); // Create an empty context object

export const UserContextProvider = userContext.Provider;

export default userContext;

export function useAuth() {
  return useContext(userContext);
}

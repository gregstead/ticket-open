import { createContext, useContext } from "react";

const userContext = createContext({ user: {} }); // Create an empty context object

export const userContextProvider = userContext.Provider;

export default userContext;

export function useAuth() {
  return useContext(userContext);
}

import { createContext, useContext } from "react";

const userContext = createContext({ user: { _id: 100 } }); // Create an empty context object

export const userContextProvider = userContext.Provider;

export default userContext;

export function useAuth() {
  return useContext(userContext);
}

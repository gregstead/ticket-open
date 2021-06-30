import { createContext, useContext } from "react";


const userContext = createContext({ user: {} }); // Create an empty context object


export default userContext;

export function useAuth() {
  return useContext(userContext);
}

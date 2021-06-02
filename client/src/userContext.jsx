import { creatContext, useContext } from "react";

const userContext = creatContext({ user: {} }); // Create a context object

export { userContext };

export function useAuth() {
  return useContext(userContext);
}

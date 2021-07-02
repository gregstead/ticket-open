import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, setAuth, ...rest }) {
  // usercontext at the global level -- inject usercontext and see if they're signed in
  // determine how they will be authenticated

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(setAuth);
        return true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        );
      }}
    />
  );
}

export default ProtectedRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import userContext from "../../userContext";

function ProtectedRoute({ component: Component, setAuth, ...rest }) {
  // usercontext at the global level -- inject usercontext and see if they're signed in
  // determine how they will be authenticated

  return (
    <>
      <userContext.Consumer>
        {([authTokens, _setAuthTokens]) => {
          return (
            <Route
              {...rest}
              render={(props) => {
                console.log(setAuth);
                return authTokens.id ? (
                  <Component {...props} />
                ) : (
                  <Redirect to="/signup" />
                );
              }}
            />
          );
        }}
      </userContext.Consumer>
    </>
  );
}

export default ProtectedRoute;

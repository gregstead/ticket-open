import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  // usercontext at the global level -- inject usercontext and see if they're signed in
  // determine how they will be authenticated

<<<<<<< HEAD
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("isAuthenticated", isAuthenticated);
        return isAuthenticated.id ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        );
      }}
    />
=======
  return ( 
        <Route
          {...rest}
          render={(authTokens, props) => {
            
            return authTokens.user ? (
              <Component {...props} />
            ) : (
              <Redirect to="/signup" />
            );
          }}
        />
>>>>>>> 291ffbf655154a4dd9c6322a48e32e71d59aa10f
  );
}

export default ProtectedRoute;

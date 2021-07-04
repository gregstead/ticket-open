import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpSide from "./pages/Signup";
import Login from "./pages/Login";
import LeftDrawer from "./components/LeftDrawer";
import routes from "./routes";

import ProtectedRoute from "./components/ProtectedRoute";

import userContext from "./userContext";

function App() {
  const [authTokens, setAuthTokens] = useState({});

  return (
    <Router>
      <userContext.Provider value={[authTokens, setAuthTokens]}>
        <LeftDrawer>
          <Switch>
            <Route
              exact
              path="/signup"
              render={(props) => <SignUpSide {...props} />}
            />
            {/* Sign in route */}
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
            {/* Protected routes */}
            {routes.map((route, key) => {
              return (
                <ProtectedRoute
                  exact
                  authTokens={authTokens}
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </LeftDrawer>
      </userContext.Provider>
    </Router>
  );
}

export default App;

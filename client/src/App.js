import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUpSide from "./pages/Signup";
import LeftDrawer from "./components/LeftDrawer";
import routes from "./routes";

import ProtectedRoute from "./components/ProtectedRoute";

import { UserContextProvider } from "./userContext";

function App() {
  const [authTokens, setAuthTokens] = useState({});

  return (
    <UserContextProvider value={authTokens}>
      <Router>
        <LeftDrawer>
          <Switch>
            
            <Route exact path="/signup" render={(props) => (
              <SignUpSide {...props} setAuth={setAuthTokens} />
            )} />
            {/* Sign in route */}
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
      </Router>
    </UserContextProvider>
  );
}

export default App;

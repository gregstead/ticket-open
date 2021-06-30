import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUpSide from "./pages/Signup";

import Login from "./pages/Login"

import LeftDrawer from "./components/LeftDrawer";
import routes from "./routes";

import ProtectedRoute from "./components/ProtectedRoute";


import userContext from "./userContext";


function App() {
  const [authTokens, setAuthTokens] = useState({});

  return (
    
      <Router>
        <LeftDrawer>
          <userContext.Provider value={authTokens}>

          <Switch>
            
            <Route exact path="/signup" render={(props) => (
              <SignUpSide {...props} setAuth={setAuthTokens} />
            )} />
            {/* Sign in route */}
            <Route exact path="/login" render={(props) => (
              <Login {...props} setAuth={setAuthTokens} />
            )} />

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

          </userContext.Provider>
        </LeftDrawer>
      </Router>
    

  );
}

export default App;

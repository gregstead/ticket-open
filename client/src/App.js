import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LeftDrawer from "./components/LeftDrawer";
import routes from "./routes";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Login />
      <LeftDrawer>
        <Switch>
          {routes.map((route, key) => {
            return (
              <ProtectedRoute
                exact
                path={route.path}
                component={route.component}
                key={key}
              />
            );
          })}
        </Switch>
      </LeftDrawer>
    </Router>
  );
}

export default App;

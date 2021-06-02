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
import AddNewUser from "./pages/AddNewUser";

function App() {
  return (
    <Router>
      {/* <Login /> */}
      <LeftDrawer>
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route
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
